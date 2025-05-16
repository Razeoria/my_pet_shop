export const updateCartSummary = (state) => {
  let count = 0;
  let total = 0;

  for (const { product, amount } of Object.values(state.entries)) {
    count += amount;
    total += product.price * amount;
  }

  state.totalCount = count;
  state.totalSum = total;
};
