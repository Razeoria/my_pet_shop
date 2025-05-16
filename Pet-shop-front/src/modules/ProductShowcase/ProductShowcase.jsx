import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../shared/state/cartSlice';
import { fetchProductById } from '../../shared/state/productThunks';
import QuantitySelector from '../../shared/components/QuantitySelector/QuantitySelector';
import PriceBadge from './PriceBadge/PriceBadge';
import InfoPanel from './InfoPanel/InfoPanel';
import PrimaryButton from '../../shared/components/PrimaryButton/PrimaryButton';
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import styles from './ProductShowcase.module.css';
import { usePageHeading } from '../../shared/hooks/usePageHeading';
import { clearCurrentProduct } from '../../shared/state/productSlice';
import Container from "../../shared/components/Container/Container";

const BASE_API = import.meta.env.VITE_API_URL || 'http://localhost:3333';

const ProductShowcase = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct: product, status, error } = useSelector(state => state.products);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(fetchProductById(id));
    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [dispatch, id]);

  usePageHeading(product?.title || 'Loading…');

  if (status === 'loading') return <p>Loading…</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!product) return null;

  const imgs = [product.image, ...(product.images || [])];
  const first = imgs[0] || '';
  const imagePath = first.startsWith('/') ? first : `/${first}`;
  const imageUrl = `${BASE_API}${imagePath}`;

  const handleAdd = () => {
    dispatch(addItem({ product, quantity: qty }));
    setQty(1);
  };

  return (
    <Container>

      <Breadcrumbs />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            src={imageUrl}
            alt={product.title}
            className={styles.image}
            onError={e => { e.currentTarget.src = 'https://via.placeholder.com/400'; }}
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <PriceBadge price={product.price} discont_price={product.discont_price} />

          <div className={styles.counPrimaryButton}>
            <QuantitySelector qty={qty} onChange={setQty} />
            <PrimaryButton width="316px" onClick={handleAdd}>
              Add to cart
            </PrimaryButton>
          </div>

          <InfoPanel text={product.description} />
        </div>
      </div>

    </Container>
  );
};

export default ProductShowcase;

