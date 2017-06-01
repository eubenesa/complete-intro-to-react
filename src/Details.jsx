// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import getApiDetails from './asyncActions';

import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  state = {
    apiData: { rating: '' }
  };

  componentDidMount() {
    if (!this.props.rating) {
      this.props.getApiData();
    }
  }

  props: {
    show: Show,
    rating: string,
    getApiData: Function
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img
            alt={`Poster for ${title}`}
            src={`/public/img/posters/${poster}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let apiData = { rating: '' };
  if (state.apiData[ownProps.show.imdbID]) {
    apiData = state.apiData[ownProps.show.imdbID];
  }

  const { rating } = apiData;
  return { rating };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getApiData() {
    dispatch(getApiDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
