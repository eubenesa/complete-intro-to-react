// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from './actionCreaters';

// @connect(mapStateToProps) // Decorators (Stage 2)
class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>{this.props.searchTerm}</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            value={this.props.searchTerm}
            placeholder="Search ..."
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
