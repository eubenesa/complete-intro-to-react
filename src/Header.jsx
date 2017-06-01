// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from './actionCreaters';

const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange: Function,
  searchTerm: string
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        value={props.searchTerm}
        placeholder="Search ..."
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
