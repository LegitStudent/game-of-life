import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import Game from './game';
import './index.css';

// Initialize Game
// For now, game is set on a 4x4 grid.
let Main = new Game(4);

ReactDOM.render(
  <Grid grid={ Main.grid } />,
  document.getElementById('root')
);
