import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import Header from './../components/Header';
import store from '../store/store';


/**
 * A custom render to setup providers. Extends regular
 * render options with `providerProps` to allow injecting
 * different scenarios to test with.
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 */
 const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Provider store={store}>{ui}</Provider>,
    renderOptions
  )
}

describe('Test for the componet Header', () => {
  it('Render Header', () => {
    customRender(<Header />, {  })

    const element = screen.getByText("Dark mode");
    expect(element).toBeInTheDocument();
  });
});