import { createSlice } from '@reduxjs/toolkit';
import { loadGroups, loadGroupDetails } from './catalogThunks';

const defaultFilters = {
  minPrice: 0,
  maxPrice: Infinity,
  withDiscount: false,
  orderBy: 'default',
};

export const catalogState = {
  groups: [],
  groupsStatus: 'idle',
  groupsError: null,

  currentGroup: null,
  relatedItems: [],
  currentStatus: 'idle',
  currentError: null,

  filterOptions: defaultFilters,
};

const catalogSlice = createSlice({
  name: 'itemGroups',
  initialState: catalogState,
  reducers: {
    updatePriceRange(state, { payload: { min, max } }) {
      state.filterOptions.minPrice = min;
      state.filterOptions.maxPrice = max;
    },
    toggleDiscountOnly(state, { payload }) {
      state.filterOptions.withDiscount = payload;
    },
    changeSorting(state, { payload }) {
      state.filterOptions.orderBy = payload;
    },
    resetGroupDetails(state) {
      state.currentGroup = null;
      state.relatedItems = [];
      state.currentStatus = 'idle';
      state.currentError = null;
      state.filterOptions = defaultFilters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadGroups.pending, (state) => {
        state.groupsStatus = 'loading';
        state.groupsError = null;
      })
      .addCase(loadGroups.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupsStatus = 'succeeded';
      })
      .addCase(loadGroups.rejected, (state, { payload }) => {
        state.groupsStatus = 'failed';
        state.groupsError = payload;
      })
      .addCase(loadGroupDetails.pending, (state) => {
        state.currentStatus = 'loading';
        state.currentError = null;
      })
      .addCase(loadGroupDetails.fulfilled, (state, { payload }) => {
        state.currentGroup = payload.category;
        state.relatedItems = payload.data;
        state.currentStatus = 'succeeded';
      })
      .addCase(loadGroupDetails.rejected, (state, { payload }) => {
        state.currentStatus = 'failed';
        state.currentError = payload;
      });
  },
});

// Экспорт экшенов с новым именем
export const actions = catalogSlice.actions;

// Экспорт редьюсера
export const reducer = catalogSlice.reducer;
