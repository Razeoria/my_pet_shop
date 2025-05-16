import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useQueryFilters } from "../../shared/hooks/useQueryFilters";
import { usePageHeading } from "../../shared/hooks/usePageHeading";

import { actions } from "../../shared/state/catalogSlice";
import { loadGroupDetails } from "../../shared/state/catalogThunks";

import FlexBox from "../../shared/components/FlexBox/FlexBox";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import ShopTuner from "../../modules/ShopTuner/ShopTuner";
import ProductCard from "../../features/product/ProductCard/ProductCard";
import Container from "../../shared/components/Container/Container";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";
import { resolveFinalPrice } from "../../shared/utils/promoUtils";

const GroupView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    detail: category,
    relatedItems,
    currentStatus,
    currentError
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadGroupDetails(id));
    return () => dispatch(actions.resetGroupDetails());
  }, [dispatch, id]);

  usePageHeading(category?.title || "Loading…");

  const { filters, setFilters } = useQueryFilters({
    priceFrom: 0,
    priceTo: Infinity,
    discounted: false,
    sortBy: "default"
  });

  const { priceFrom, priceTo, discounted, sortBy } = filters;

  if (currentStatus === "loading") return <p>Loading…</p>;
  if (currentStatus === "failed") return <p>Error: {currentError}</p>;

  let products = Array.isArray(relatedItems) ? relatedItems : [];

  products = products
    .filter(({ price, discont_price }) => {
      const final = resolveFinalPrice(price, discont_price);
      return final >= priceFrom && final <= priceTo;
    })
    .filter((item) => !discounted || item.discont_price != null);

  if (sortBy === "newest") {
    products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortBy === "priceDesc") {
    products.sort(
      (a, b) =>
        resolveFinalPrice(b.price, b.discont_price) -
        resolveFinalPrice(a.price, a.discont_price)
    );
  } else if (sortBy === "priceAsc") {
    products.sort(
      (a, b) =>
        resolveFinalPrice(a.price, a.discont_price) -
        resolveFinalPrice(b.price, b.discont_price)
    );
  }

  return (
    <Container>
      <Breadcrumbs />
      {category && <BlockTitle title={category.title} />}
      <ShopTuner
        filters={filters}
        onPriceChange={setFilters}
        onToggleDiscounted={setFilters}
        onSortChange={setFilters}
      />
      <FlexBox>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </FlexBox>
    </Container>
  );
};

export default GroupView;
