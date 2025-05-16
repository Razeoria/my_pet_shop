// shared/state/catalogState.js
export const defaultFilters = {
  minPrice: 0,
  maxPrice: Infinity,
  withDiscount: false,
  orderBy: 'default',
};

export const initialCatalogState = {
  groups: [],
  groupsStatus: 'idle',
  groupsError: null,

  currentGroup: null,
  relatedItems: [],
  currentStatus: 'idle',
  currentError: null,

  filterOptions: defaultFilters,
};

