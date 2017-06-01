// @flow

import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';

import { UnwrappedSearch } from '../Search';
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
});
