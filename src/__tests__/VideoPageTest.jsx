import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import VideoPage from './../pages/Video';
import store from '../store/store';
import mock from '../mock/youtube-videos-mock.json';
import ReactRouter, { useParams } from 'react-router';

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

describe('Test for the Video Page', () => {
  it('Render Video Page', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'HYyRZiwBWc8' });
    store.dispatch({ type: 'FETCH_VIDEOS', payload : mock.items });
    customRender(<VideoPage />, { useParams })

    const element = screen.getByText("Wizeline Guadalajara | Bringing Silicon Valley to Mexico");
    expect(element).toBeInTheDocument();
  });
});