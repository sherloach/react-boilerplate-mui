import { createSelector } from 'reselect';

export const roleSelector = createSelector(
  (state) => state.auth,
  (auth) => auth.role,
);
