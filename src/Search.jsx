// @flow

import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import ShowCard from './ShowCard';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show =>
          `${show.title} ${show.description}`
            .toUpperCase()
            .includes(props.searchTerm.toUpperCase())
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export const UnwrappedSearch = Search;
export default connect(mapStateToProps)(Search);
