import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
  it('renders hello message with default name', () => {
    render(<Hello />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, World!');
  });

  it('renders hello message with custom name', () => {
    render(<Hello name="Jest" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello, Jest!');
  });

  it('renders the correct structure', () => {
    render(<Hello name="Test" />);
    const container = screen.getByText('Hello, Test!').closest('div');
    expect(container).toBeInTheDocument();
  });
});