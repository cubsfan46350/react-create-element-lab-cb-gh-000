import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');
const javascript = React.createElement('li', {}, 'JavaScript');
const react = React.createElement('li',{}, 'React');
const movies = React.createElement('li',{},'Movies');
const iceCream = React.createElement('li',{},'Ice cream');
const list = React.createElement('ul', {className: 'my-interests'},javascript,react,movies,iceCream);
const meInReact = React.createElement('div', {className : 'me'},title,paragraph,list );

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

