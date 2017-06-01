import { SET_SEARCH_TERM } from './actions';

const INITIAL_STATE = {
  searchTerm: ''
};

const setSearchTerm = (state, action) =>
  Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action);
    default:
      return state;
  }
};

export default rootReducer;
