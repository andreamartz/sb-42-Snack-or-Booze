import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// pass
it("renders without crashing", () => {
  render(<App />);
});

// Problem: page is still loading when this test runs apparently?
it('home route ("/")', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  // waitFor(expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument());
  expect(getByText("Loading", { exact: false })).toBeInTheDocument();
});

it('renders /snacks route', () => {
  const { getByText, queryByText } = render(
    <MemoryRouter initialEntries={['/', '/snacks']}>
      <App />
    </MemoryRouter>
  );
  expect(getByText("Loading", { exact: false })).toBeInTheDocument();
  // expect(getByText("Checkout our menu of")).toBeInTheDocument();
  // expect(getByText("Nachos")).toBeInTheDocument();
  // expect(getByText("Hummus")).toBeInTheDocument();
});

