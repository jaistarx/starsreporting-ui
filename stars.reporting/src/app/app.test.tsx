import store from '@/redux/store';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './index';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
