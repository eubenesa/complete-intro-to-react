// @flow

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
});

export const addApiData = (apiData: Show) => ({
  type: ADD_API_DATA,
  payload: apiData
});
