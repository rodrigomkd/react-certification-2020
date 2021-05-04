import React from 'react';
import App  from './App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';

/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
 const customRender = (ui) => {
  return render(
    <Provider store={store}>{ui}</Provider>
  )
}

describe('Test for App Component', () => {
  it('Render App Component', () => {
    customRender(<App />);
    const element = screen.getByText("Welcome to the Challenge!");
    expect(element).toBeInTheDocument();
  });
});