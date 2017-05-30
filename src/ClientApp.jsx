import React from 'react';
import { render } from 'react-dom';

const MyTitle = props => (
  <div>
    <h1 style={{ color: props.color }}>{props.title.toUpperCase()}</h1>
  </div>
  // <h2>will work in React 16</h2>
);

const MyFirstComponent = () => (
  <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stranger Things" color="GreenYellow" />
    <MyTitle title="House of Cards" color="Peru" />
    <MyTitle title="Unbreakable Kimmy Schmidt" color="burlywood" />
  </div>
);

render(<MyFirstComponent />, document.getElementById('app'));
