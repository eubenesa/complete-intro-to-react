import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = props =>
  ce('div', null, ce('h1', { style: { color: props.color } }, props.title));

const MyFirstComponent = () =>
  ce('div', { id: 'my-first-component' }, [
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Unbreakable Kimmy Schmidt', color: 'peru' })
  ]);

render(ce(MyFirstComponent), document.getElementById('app'));
