import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { render } from "@testing-library/react"

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Header shows darkMode link', () => {
  const { getByText } = render (<Header />)
  const darkmode = getByText(/toggle darkmode/i)
})
