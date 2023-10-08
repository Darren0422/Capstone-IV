import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';

// Snapshot test
test('App component renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


