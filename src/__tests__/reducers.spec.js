// @flow

import reducers from '../reducers';

describe('reducers', () => {
  it('SET_SEARCH_TERM', () => {
    const state = reducers(
      { searchTerm: '', apiData: {} },
      { type: 'SET_SEARCH_TERM', payload: 'atlanta' }
    );
    expect(state).toEqual({ searchTerm: 'atlanta', apiData: {} });
  });

  it('ADD_API_DATA', () => {
    const state = reducers(
      { searchTerm: '', apiData: {} },
      {
        type: 'ADD_API_DATA',
        payload: {
          rating: '4.0',
          description:
            'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
          imdbID: 'tt4288182',
          poster: 'a.jpg',
          title: 'Atlanta',
          trailer: 'MpEdJ-mmTlY',
          year: '2008–2013'
        }
      }
    );
    expect(state).toEqual({
      searchTerm: '',
      apiData: {
        tt4288182: {
          rating: '4.0',
          description:
            'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
          imdbID: 'tt4288182',
          poster: 'a.jpg',
          title: 'Atlanta',
          trailer: 'MpEdJ-mmTlY',
          year: '2008–2013'
        }
      }
    });
  });

  it('ADD_API_DATA with two shows', () => {
    const state = reducers(
      {
        searchTerm: '',
        apiData: {
          tt4270492: {
            rating: '5.7',
            description:
              'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
            imdbID: 'tt4270492',
            poster: 'b.jpg',
            title: 'Billions',
            trailer: '_raEUMLL-ZI',
            year: '2016–'
          }
        }
      },
      {
        type: 'ADD_API_DATA',
        payload: {
          rating: '7.0',
          description:
            'A television anthology series that shows the dark side of life and technology.',
          imdbID: 'tt2085059',
          poster: 'bm.jpg',
          title: 'Black Mirror',
          trailer: 'jDiYGjp5iFg',
          year: '2011–'
        }
      }
    );
    expect(state).toEqual({
      searchTerm: '',
      apiData: {
        tt4270492: {
          rating: '5.7',
          description:
            'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
          imdbID: 'tt4270492',
          poster: 'b.jpg',
          title: 'Billions',
          trailer: '_raEUMLL-ZI',
          year: '2016–'
        },
        tt2085059: {
          rating: '7.0',
          description:
            'A television anthology series that shows the dark side of life and technology.',
          imdbID: 'tt2085059',
          poster: 'bm.jpg',
          title: 'Black Mirror',
          trailer: 'jDiYGjp5iFg',
          year: '2011–'
        }
      }
    });
  });
});
