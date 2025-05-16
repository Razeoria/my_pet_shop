import { createSelector } from "@reduxjs/toolkit";

// Гарантирует, что список категорий не создаёт новый массив каждый раз
export const selectStableCategories = createSelector(
  state => state.categories?.list,
  list => list ?? []
);

// Гарантирует, что список товаров не создаёт новый массив
export const selectStableProducts = createSelector(
  state => state.products?.items,
  items => items ?? []
);

// Просто возвращаем ссылку на текущий продукт (он не массив)
export const selectCurrentProduct = state => state.products?.currentProduct;
