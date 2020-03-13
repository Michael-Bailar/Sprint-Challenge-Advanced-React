import React from 'react'
import ReactDOM from 'react-dom'
import PlayersList from './PlayersList'
import { render } from "@testing-library/react"




it('PlayersList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayersList />, div);
  ReactDOM.unmountComponentAtNode(div);

});

it('PlayersList renders header to Dom', () => {
  const { getByText } = render (<PlayersList />)
  const header = getByText(/so many runners!/i)
})
