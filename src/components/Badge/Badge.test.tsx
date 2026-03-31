/**
 * Badge Component Tests
 *
 * Unit tests for the Badge component.
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('renders with default variant when not specified', () => {
      const { container } = render(<Badge>Default</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('default');
    });

    it('renders with default size when not specified', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('medium');
    });
  });

  describe('Variants', () => {
    it('renders primary variant', () => {
      const { container } = render(<Badge variant="primary">Primary</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('primary');
    });

    it('renders success variant', () => {
      const { container } = render(<Badge variant="success">Success</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('success');
    });

    it('renders warning variant', () => {
      const { container } = render(<Badge variant="warning">Warning</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('warning');
    });

    it('renders danger variant', () => {
      const { container } = render(<Badge variant="danger">Danger</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('danger');
    });

    it('renders default variant explicitly', () => {
      const { container } = render(<Badge variant="default">Default</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('default');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Badge size="small">Small</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('small');
    });

    it('renders medium size', () => {
      const { container } = render(<Badge size="medium">Medium</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(<Badge size="large">Large</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('large');
    });
  });

  describe('Dot Mode', () => {
    it('renders as dot without text when dot prop is true', () => {
      const { container } = render(<Badge dot>Hidden</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('dot');
      expect(badge).toHaveTextContent('');
    });

    it('does not apply dot class when dot prop is false', () => {
      const { container } = render(<Badge dot={false}>Visible</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).not.toHaveClass('dot');
      expect(screen.getByText('Visible')).toBeInTheDocument();
    });

    it('renders dot with correct size classes', () => {
      const { container } = render(
        <Badge size="small" dot>
          Dot
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('dot');
      expect(badge).toHaveClass('small');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(<Badge className="custom-badge">Badge</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('custom-badge');
    });

    it('preserves default classes when custom className is provided', () => {
      const { container } = render(
        <Badge variant="primary" size="large" className="custom-badge">
          Badge
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('custom-badge');
      expect(badge).toHaveClass('primary');
      expect(badge).toHaveClass('large');
    });
  });

  describe('Combination of Props', () => {
    it('renders with variant, size, and className combined', () => {
      const { container } = render(
        <Badge variant="success" size="small" className="test-class">
          Test
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('success');
      expect(badge).toHaveClass('small');
      expect(badge).toHaveClass('test-class');
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('renders dot with variant and size', () => {
      const { container } = render(
        <Badge variant="danger" size="large" dot>
          Content
        </Badge>
      );
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('danger');
      expect(badge).toHaveClass('large');
      expect(badge).toHaveClass('dot');
      expect(badge).toHaveTextContent('');
    });
  });

  describe('Accessibility', () => {
    it('renders as a span element', () => {
      const { container } = render(<Badge>Badge</Badge>);
      expect(container.firstChild?.nodeName).toBe('SPAN');
    });

    it('renders with numeric content', () => {
      render(<Badge>99+</Badge>);
      expect(screen.getByText('99+')).toBeInTheDocument();
    });
  });
});
