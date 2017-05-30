import React from 'react';
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <pre>
      <code>{JSON.stringify(preload, null, 2)}</code>
    </pre>
  </div>
);

export default Search;
