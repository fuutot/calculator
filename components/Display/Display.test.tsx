import { render, screen } from '@testing-library/react';
import Display from './index';

describe('Display Component', () => {
  it('renders with default value of 0', () => {
    render(<Display />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toBeInTheDocument();
    expect(display).toHaveTextContent('0');
  });

  it('displays string value correctly', () => {
    render(<Display value="123.45" />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveTextContent('123.45');
  });

  it('displays numeric value correctly', () => {
    render(<Display value={987} />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveTextContent('987');
  });

  it('handles empty or null values by showing 0', () => {
    render(<Display value="" />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveTextContent('0');
  });

  it('displays negative numbers correctly', () => {
    render(<Display value={-42} />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveTextContent('-42');
  });

  it('displays decimal numbers correctly', () => {
    render(<Display value="3.14159" />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveTextContent('3.14159');
  });

  it('has proper accessibility attributes', () => {
    render(<Display value="42" />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveAttribute('aria-readonly', 'true');
    expect(display).toHaveAttribute('aria-label', 'Calculator display');
  });

  it('applies correct CSS classes for styling', () => {
    render(<Display value="123" />);
    const display = screen.getByRole('textbox', { name: /calculator display/i });
    expect(display).toHaveClass('bg-gray-100', 'dark:bg-gray-800', 'font-mono', 'text-2xl');
  });
});