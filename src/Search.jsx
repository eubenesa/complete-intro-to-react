// @flow

import React, { Component } from 'react';

import Header from './Header';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toUpperCase()
                .includes(this.state.searchTerm.toUpperCase())
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
