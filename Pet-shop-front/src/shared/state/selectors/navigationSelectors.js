import { createSelector } from "@reduxjs/toolkit";

export const getGroupList = createSelector(
  state => state.categories?.list,
  list => list || []
);

export const getProductList = createSelector(
  state => state.products?.items,
  items => items || []
);

export const getCurrentProduct = state => state.products?.currentProduct;
