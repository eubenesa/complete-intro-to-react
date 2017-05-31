// @flow

import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';

import Search from '../Search';
import ShowCard from '../ShowCard';

describe('Search', () => {
  const component = shallow(<Search shows={preload.shows} />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on search term', () => {
    const searchTerm = 'black';
    const showCount = 2;

    component
      .find('input')
      .simulate('change', { target: { value: searchTerm } });
    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
