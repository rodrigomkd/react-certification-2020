import Header from './../components/Header';

describe('Test for the componet Header', () => {
  it('Render Header', () => {
    render(<Header />);

    const element = screen.getByText("Dark mode");
    expect(element).toBeInTheDocument();
  });
});