import { SET_SEARCH_TERM } from './actions';

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
});
