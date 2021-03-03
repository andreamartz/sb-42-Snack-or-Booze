import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

it("renders without crashing", () => {
  render(<App />);
});
