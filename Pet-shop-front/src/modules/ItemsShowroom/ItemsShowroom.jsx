import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../shared/state/productThunks';
import ProductCard from '../../features/product/ProductCard/ProductCard';
import FlexBox from '../../shared/components/FlexBox/FlexBox';
import { resolveFinalPrice } from '../../shared/utils/promoUtils';

const ItemsShowroom = ({
  limit,
  discountedOnly = false,
  filters = {},
}) => {
  const dispatch = useDispatch();
  const { entries, status, error } = useSelector(state => state.products);

  const {
    priceFrom = 0,
    priceTo = Infinity,
    discounted = false,
    sortBy = 'default',
  } = filters;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Fetching items…</p>;
  if (status === 'failed') return <p>Oops: {error}</p>;

  let filtered = entries
    .filter(item => {
      const cost = resolveFinalPrice(item.price, item.discont_price);
      return cost >= priceFrom && cost <= priceTo;
    })
    .filter(item =>
      discountedOnly
        ? item.discont_price != null
        : !discounted || item.discont_price != null
    );

  if (sortBy === 'newest') {
    filtered = [...filtered].sort((a, b) =>
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortBy === 'priceDesc') {
    filtered = [...filtered].sort((a, b) =>
      resolveFinalPrice(b.price, b.discont_price) -
      resolveFinalPrice(a.price, a.discont_price)
    );
  } else if (sortBy === 'priceAsc') {
    filtered = [...filtered].sort((a, b) =>
      resolveFinalPrice(a.price, a.discont_price) -
      resolveFinalPrice(b.price, b.discont_price)
    );
  }

  if (typeof limit === 'number') {
    filtered = filtered.slice(0, limit);
  }

  return (
    <FlexBox>
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </FlexBox>
  );
};

export default ItemsShowroom;
