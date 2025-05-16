import { createSlice } from '@reduxjs/toolkit';
import { initialCartState } from './cartState';
import { updateCartSummary } from './cartUtils';

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const { product, quantity } = action.payload;
      const id = product.id;
      if (state.entries[id]) {
        state.entries[id].amount += quantity;
      } else {
        state.entries[id] = { product, amount: quantity };
      }
      updateCartSummary(state);
    },
    removeItem(state, action) {
      delete state.entries[action.payload];
      updateCartSummary(state);
    },
    increaseAmount(state, action) {
      const id = action.payload;
      if (state.entries[id]) {
        state.entries[id].amount += 1;
        updateCartSummary(state);
      }
    },
    decreaseAmount(state, action) {
      const id = action.payload;
      if (state.entries[id]) {
        state.entries[id].amount -= 1;
        if (state.entries[id].amount <= 0) {
          delete state.entries[id];
        }
        updateCartSummary(state);
      }
    },
    resetCart(state) {
      state.entries = {};
      state.totalCount = 0;
      state.totalSum = 0;
    },
  }
});

export const {
  addItem,
  removeItem,
  increaseAmount,
  decreaseAmount,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;