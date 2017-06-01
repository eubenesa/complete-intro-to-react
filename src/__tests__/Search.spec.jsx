// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { shallow, render } from 'enzyme';

import { setSearchTerm } from '../actionCreaters';
import store from '../store';

import preload from '../../data.json';

import Search, { UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  let component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm={''} />
  );

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const searchTerm = 'black';
    component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm={searchTerm} />
    );
    const showCount = 2;

    expect(component.find(ShowCard).length).toEqual(showCount);
  });

  it('should render correct amount of shows based on search term - Redux', () => {
    const searchTerm = 'black';
    store.dispatch(setSearchTerm(searchTerm));
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Search shows={preload.shows} />
        </MemoryRouter>
      </Provider>
    );
    const showCount = 2;

    expect(component.find('.show-card').length).toEqual(showCount);
  });
});

