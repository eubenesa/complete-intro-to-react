// @flow

import axios from 'axios';
import { addApiData } from './actionCreators';

const getApiDetails = (imdbID: string) => (dispatch: Function) => {
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => {
      dispatch(addApiData(response.data));
    })
    .catch(error => {
      console.error('axios error', error); // eslint-disable-line no-console
    });
};

export default getApiDetails;
