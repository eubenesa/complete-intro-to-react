// @flow

import moxios from 'moxios';
import { setSearchTerm, addApiData, getApiDetails } from '../actionCreaters';

describe('actionCreators', () => {
  it('setSearchTerm', () => {
    expect(setSearchTerm('homeland')).toMatchSnapshot();
  });

  const atlanta = {
    description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
    imdbID: 'tt4288182',
    poster: 'a.jpg',
    title: 'Atlanta',
    trailer: 'MpEdJ-mmTlY',
    year: '2008–2013',
    rating: '8.6'
  };

  it('addApiData', () => {
    expect(addApiData(atlanta)).toMatchSnapshot();
  });

  it('getApiDetails', (done: Function) => {
    const dispatchMock = jest.fn();
    moxios.withMock(() => {
      getApiDetails(atlanta.imdbID)(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: atlanta
          })
          .then(() => {
            expect(request.url).toEqual(
              `http://localhost:3000/${atlanta.imdbID}`
            );
            expect(dispatchMock).toBeCalledWith(addApiData(atlanta));
            done();
          });
      });
    });
  });
});
