import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('hoge', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
