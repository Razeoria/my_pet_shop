import { createSelector } from 'reselect';

export const selectRawGroups = state => state.itemGroups.groups;

export const selectActiveGroups = createSelector(
    [selectRawGroups],
    (groups) => groups.filter(group => group.active)
);
