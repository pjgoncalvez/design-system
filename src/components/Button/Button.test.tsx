/**
 * Button Component Tests
 *
 * Unit tests for the Button component.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    });

    it('renders with default variant when not specified', () => {
      const { container } = render(<Button>Button</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('primary');
    });

    it('renders with default size when not specified', () => {
      const { container } = render(<Button>Button</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('medium');
    });

    it('renders with type="button" by default', () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('Variants', () => {
    it('renders primary variant', () => {
      const { container } = render(<Button variant="primary">Primary</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('primary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('secondary');
    });

    it('renders success variant', () => {
      const { container } = render(<Button variant="success">Success</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('success');
    });

    it('renders warning variant', () => {
      const { container } = render(<Button variant="warning">Warning</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('warning');
    });

    it('renders danger variant', () => {
      const { container } = render(<Button variant="danger">Danger</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('danger');
    });

    it('renders ghost variant', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('ghost');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Button size="small">Small</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('small');
    });

    it('renders medium size', () => {
      const { container } = render(<Button size="medium">Medium</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(<Button size="large">Large</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('large');
    });
  });

  describe('Disabled State', () => {
    it('renders disabled button', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading prop is true', () => {
      render(<Button loading>Loading</Button>);
      const spinner = screen.getByLabelText('Loading');
      expect(spinner).toBeInTheDocument();
    });

    it('disables button when loading', () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('applies loading class when loading', () => {
      const { container } = render(<Button loading>Loading</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('loading');
    });

    it('does not call onClick when loading', () => {
      const handleClick = vi.fn();
      render(
        <Button loading onClick={handleClick}>
          Loading
        </Button>
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Full Width', () => {
    it('applies fullWidth class when fullWidth prop is true', () => {
      const { container } = render(<Button fullWidth>Full Width</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('fullWidth');
    });

    it('does not apply fullWidth class when fullWidth prop is false', () => {
      const { container } = render(<Button fullWidth={false}>Normal</Button>);
      const button = container.querySelector('button');
      expect(button).not.toHaveClass('fullWidth');
    });
  });

  describe('Click Handler', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('passes event to onClick handler', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe('Button Type', () => {
    it('accepts type="submit"', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('accepts type="reset"', () => {
      render(<Button type="reset">Reset</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(<Button className="custom-button">Button</Button>);
      const button = container.querySelector('button');
      expect(button).toHaveClass('custom-button');
    });

    it('preserves default classes when custom className is provided', () => {
      const { container } = render(
        <Button variant="success" size="large" className="custom-button">
          Button
        </Button>
      );
      const button = container.querySelector('button');
      expect(button).toHaveClass('custom-button');
      expect(button).toHaveClass('success');
      expect(button).toHaveClass('large');
    });
  });

  describe('Combination of Props', () => {
    it('renders with all props combined', () => {
      const handleClick = vi.fn();
      const { container } = render(
        <Button
          variant="primary"
          size="large"
          disabled={false}
          loading={false}
          fullWidth
          type="submit"
          className="test-class"
          onClick={handleClick}
        >
          Test
        </Button>
      );
      const button = container.querySelector('button');
      expect(button).toHaveClass('primary');
      expect(button).toHaveClass('large');
      expect(button).toHaveClass('fullWidth');
      expect(button).toHaveClass('test-class');
      expect(button).toHaveAttribute('type', 'submit');
      expect(button).not.toBeDisabled();
    });

    it('handles disabled and loading together', () => {
      render(
        <Button disabled loading>
          Button
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders as a button element', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('is keyboard accessible', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Button</Button>);
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('supports additional HTML button attributes', () => {
      render(
        <Button aria-label="Custom label" data-testid="custom-button">
          Button
        </Button>
      );
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveAttribute('aria-label', 'Custom label');
    });
  });
});
