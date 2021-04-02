import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import VideoList from './../components/VideoList';
import store from '../store/store';
import mock from '../mock/youtube-videos-mock.json';


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

describe('Test for the Vide List component', () => {
  it('Render Video List', () => {
    store.dispatch({ type: 'FETCH_VIDEOS', payload : mock.items });
    customRender(<VideoList />, {  })

    const element = screen.getByText("Video Tour | Welcome to Wizeline Guadalajara");
    expect(element).toBeInTheDocument();
  });
});