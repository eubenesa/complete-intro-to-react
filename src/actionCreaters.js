// @flow

import axios from 'axios';

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
});

export const addApiData = (apiData: Show) => ({
  type: ADD_API_DATA,
  payload: apiData
});

export const getApiDetails = (imdbID: string) => (dispatch: Function) => {
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => {
      dispatch(addApiData(response.data));
    })
    .catch(error => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
};
