// @flow

import React, { Component } from 'react';

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
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder="Search ..."
            onChange={this.handleSearchTermChange}
          />
        </header>
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
