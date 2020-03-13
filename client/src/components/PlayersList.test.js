import React from 'react';
import ReactDOM from 'react-dom';
import PlayersList from './PlayersList';

it('PlayersList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayersList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
