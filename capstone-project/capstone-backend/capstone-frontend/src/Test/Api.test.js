import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Api from '../Components/Api';

// Snapshot test
test('Api component renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Api />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

