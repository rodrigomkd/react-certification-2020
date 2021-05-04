import React from 'react';
import { render, screen } from '@testing-library/react';
import CardVideo from './../components/CardVideo/CardVideo';

describe('Test for CardVideo componet', () => {
  it('Render CardVideo', () => {
    render(<CardVideo title="test" description="testing" videoLink="" />);
    const element = screen.getByText("test");
    expect(element).toBeInTheDocument();
  });
});