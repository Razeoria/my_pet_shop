import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchProductById } from './productThunks';
import { initialProductState } from './productState';

const productSlice = createSlice({
  name: 'products',
  initialState: initialProductState,
  reducers: {
    clearCurrentProduct(state) {
      state.currentProduct = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entries = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
