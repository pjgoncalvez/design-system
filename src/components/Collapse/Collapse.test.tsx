/**
 * Collapse Component Tests
 *
 * Unit tests for the Collapse component.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Collapse } from './Collapse';

describe('Collapse', () => {
  describe('Rendering', () => {
    it('renders header content', () => {
      render(
        <Collapse header="Test Header">
          <div>Content</div>
        </Collapse>
      );
      expect(screen.getByText('Test Header')).toBeInTheDocument();
    });

    it('renders with collapsed state by default', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders with default size when not specified', () => {
      const { container } = render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('medium');
    });

    it('renders with border by default', () => {
      const { container } = render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('bordered');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(
        <Collapse header="Header" size="small">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('small');
    });

    it('renders medium size', () => {
      const { container } = render(
        <Collapse header="Header" size="medium">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(
        <Collapse header="Header" size="large">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('large');
    });
  });

  describe('Bordered', () => {
    it('renders with border when bordered is true', () => {
      const { container } = render(
        <Collapse header="Header" bordered={true}>
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('bordered');
    });

    it('renders without border when bordered is false', () => {
      const { container } = render(
        <Collapse header="Header" bordered={false}>
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).not.toHaveClass('bordered');
    });
  });

  describe('Disabled State', () => {
    it('applies disabled class when disabled', () => {
      const { container } = render(
        <Collapse header="Header" disabled>
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('disabled');
    });

    it('sets tabIndex to -1 when disabled', () => {
      render(
        <Collapse header="Header" disabled>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('tabIndex', '-1');
    });

    it('does not toggle when disabled and clicked', () => {
      render(
        <Collapse header="Header" disabled>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not call onChange when disabled', () => {
      const handleChange = vi.fn();
      render(
        <Collapse header="Header" disabled onChange={handleChange}>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Default Expanded State', () => {
    it('renders expanded when defaultExpanded is true', () => {
      render(
        <Collapse header="Header" defaultExpanded>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('renders collapsed when defaultExpanded is false', () => {
      render(
        <Collapse header="Header" defaultExpanded={false}>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('toggles expanded state when clicked', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('calls onChange when toggled', () => {
      const handleChange = vi.fn();
      render(
        <Collapse header="Header" onChange={handleChange}>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.click(button);
      expect(handleChange).toHaveBeenCalledWith(true);

      fireEvent.click(button);
      expect(handleChange).toHaveBeenCalledWith(false);
    });
  });

  describe('Controlled Mode', () => {
    it('uses controlled expanded state', () => {
      const { rerender } = render(
        <Collapse header="Header" expanded={false}>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      rerender(
        <Collapse header="Header" expanded={true}>
          <div>Content</div>
        </Collapse>
      );
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('calls onChange but does not change state on click in controlled mode', () => {
      const handleChange = vi.fn();
      render(
        <Collapse header="Header" expanded={false} onChange={handleChange}>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.click(button);
      expect(handleChange).toHaveBeenCalledWith(true);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Keyboard Interaction', () => {
    it('toggles on Enter key press', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'true');

      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('toggles on Space key press', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.keyDown(button, { key: ' ' });
      expect(button).toHaveAttribute('aria-expanded', 'true');

      fireEvent.keyDown(button, { key: ' ' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not toggle on other key presses', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.keyDown(button, { key: 'a' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not toggle on keyboard when disabled', () => {
      render(
        <Collapse header="Header" disabled>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');

      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Content', () => {
    it('renders children content', () => {
      render(
        <Collapse header="Header" defaultExpanded>
          <div>Test Content</div>
        </Collapse>
      );
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('sets aria-hidden to true when collapsed', () => {
      const { container } = render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const content = container.querySelector('.content');
      expect(content).toHaveAttribute('aria-hidden', 'true');
    });

    it('sets aria-hidden to false when expanded', () => {
      const { container } = render(
        <Collapse header="Header" defaultExpanded>
          <div>Content</div>
        </Collapse>
      );
      const content = container.querySelector('.content');
      expect(content).toHaveAttribute('aria-hidden', 'false');
    });
  });

  describe('Custom className', () => {
    it('applies custom className to collapse', () => {
      const { container } = render(
        <Collapse header="Header" className="custom-collapse">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('custom-collapse');
    });

    it('applies custom headerClassName', () => {
      const { container } = render(
        <Collapse header="Header" headerClassName="custom-header">
          <div>Content</div>
        </Collapse>
      );
      const header = container.querySelector('.header');
      expect(header).toHaveClass('custom-header');
    });

    it('applies custom contentClassName', () => {
      const { container } = render(
        <Collapse header="Header" contentClassName="custom-content">
          <div>Content</div>
        </Collapse>
      );
      const content = container.querySelector('.content');
      expect(content).toHaveClass('custom-content');
    });

    it('preserves default classes when custom className is provided', () => {
      const { container } = render(
        <Collapse header="Header" size="large" className="custom">
          <div>Content</div>
        </Collapse>
      );
      const collapse = container.querySelector('.collapse');
      expect(collapse).toHaveClass('custom');
      expect(collapse).toHaveClass('large');
    });
  });

  describe('Accessibility', () => {
    it('renders header as a button role', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('is keyboard accessible', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('has correct aria-expanded attribute', () => {
      render(
        <Collapse header="Header">
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded');
    });

    it('has aria-disabled when disabled', () => {
      render(
        <Collapse header="Header" disabled>
          <div>Content</div>
        </Collapse>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });
});
