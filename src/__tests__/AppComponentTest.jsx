import React from 'react';
import App  from './../components/App';
import { render, screen } from '@testing-library/react';

describe('Test for App Component', () => {
  it('Render App Component', () => {
    render(<App />);
    const element = screen.getByText("let me in →");
    expect(element).toBeInTheDocument();
  });
});