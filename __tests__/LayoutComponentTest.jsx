import React from 'react';
import Layout from './../components/Layout';
import { render } from '@testing-library/react';

describe('Test for Layout Component', () => {
  it('Render Layout Component', () => {
    const component = render(<Layout />);
    expect(component.container).toBeVisible();
  });
});