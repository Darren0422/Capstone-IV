import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import UserProfile from '../Components/UserProfile';

// Snapshot test
test('UserProfile component renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <UserProfile />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
