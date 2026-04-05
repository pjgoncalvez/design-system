/**
 * Drawer Component Tests
 *
 * Unit tests for the Drawer component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  beforeEach(() => {
    // Reset body styles before each test
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });

  afterEach(() => {
    // Cleanup after each test
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });

  describe('Rendering', () => {
    it('renders drawer when open', () => {
      render(
        <Drawer open={true} onClose={() => {}}>
          <div>Drawer content</div>
        </Drawer>
      );

      expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });

    it('does not render drawer when closed', () => {
      render(
        <Drawer open={false} onClose={() => {}}>
          <div>Drawer content</div>
        </Drawer>
      );

      expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
    });

    it('renders with title', () => {
      render(
        <Drawer open={true} onClose={() => {}} title="My Drawer">
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('My Drawer')).toBeInTheDocument();
    });

    it('renders close button by default', () => {
      render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByLabelText('Close drawer')).toBeInTheDocument();
    });

    it('hides close button when showCloseButton is false', () => {
      render(
        <Drawer open={true} onClose={() => {}} showCloseButton={false}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.queryByLabelText('Close drawer')).not.toBeInTheDocument();
    });

    it('renders footer when provided', () => {
      render(
        <Drawer open={true} onClose={() => {}} footer={<button>Save</button>}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('renders overlay by default', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      expect(container.querySelector('.overlay')).toBeInTheDocument();
    });

    it('hides overlay when showOverlay is false', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} showOverlay={false}>
          <div>Content</div>
        </Drawer>
      );

      expect(container.querySelector('.overlay')).not.toBeInTheDocument();
    });
  });

  describe('Placements', () => {
    it('renders with right placement by default', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('right');
    });

    it('renders with left placement', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} placement="left">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('left');
    });

    it('renders with top placement', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} placement="top">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('top');
    });

    it('renders with bottom placement', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} placement="bottom">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('bottom');
    });
  });

  describe('Sizes', () => {
    it('renders with medium size by default', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('medium');
    });

    it('renders with small size', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} size="small">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('small');
    });

    it('renders with large size', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} size="large">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('large');
    });

    it('renders with full size', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} size="full">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('full');
    });
  });

  describe('Close Behavior', () => {
    it('calls onClose when close button is clicked', () => {
      const handleClose = vi.fn();
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Content</div>
        </Drawer>
      );

      const closeButton = screen.getByLabelText('Close drawer');
      fireEvent.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when overlay is clicked', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Drawer open={true} onClose={handleClose}>
          <div>Content</div>
        </Drawer>
      );

      const overlay = container.querySelector('.overlay');
      fireEvent.click(overlay!);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when overlay is clicked if closeOnOverlayClick is false', () => {
      const handleClose = vi.fn();
      const { container } = render(
        <Drawer open={true} onClose={handleClose} closeOnOverlayClick={false}>
          <div>Content</div>
        </Drawer>
      );

      const overlay = container.querySelector('.overlay');
      fireEvent.click(overlay!);

      expect(handleClose).not.toHaveBeenCalled();
    });

    it('calls onClose when escape key is pressed', () => {
      const handleClose = vi.fn();
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Content</div>
        </Drawer>
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when escape key is pressed if closeOnEscape is false', () => {
      const handleClose = vi.fn();
      render(
        <Drawer open={true} onClose={handleClose} closeOnEscape={false}>
          <div>Content</div>
        </Drawer>
      );

      fireEvent.keyDown(document, { key: 'Escape' });

      expect(handleClose).not.toHaveBeenCalled();
    });

    it('does not close when clicking inside drawer content', () => {
      const handleClose = vi.fn();
      render(
        <Drawer open={true} onClose={handleClose}>
          <div>Content</div>
        </Drawer>
      );

      const content = screen.getByText('Content');
      fireEvent.click(content);

      expect(handleClose).not.toHaveBeenCalled();
    });
  });

  describe('Body Scroll Lock', () => {
    it('locks body scroll when drawer is open', () => {
      render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      expect(document.body.style.overflow).toBe('hidden');
    });

    it('restores body scroll when drawer is closed', () => {
      const { rerender } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <Drawer open={false} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      expect(document.body.style.overflow).toBe('');
    });

    it('does not lock body scroll when lockBodyScroll is false', () => {
      render(
        <Drawer open={true} onClose={() => {}} lockBodyScroll={false}>
          <div>Content</div>
        </Drawer>
      );

      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('Accessibility', () => {
    it('sets correct ARIA attributes on drawer', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} title="Settings">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveAttribute('role', 'dialog');
      expect(drawer).toHaveAttribute('aria-modal', 'true');
      expect(drawer).toHaveAttribute('aria-label', 'Settings');
    });

    it('sets tabIndex on drawer for focus management', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveAttribute('tabIndex', '-1');
    });

    it('hides overlay from accessibility tree', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      const overlay = container.querySelector('.overlay');
      expect(overlay).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Custom Class Names', () => {
    it('applies custom className to drawer', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} className="custom-drawer">
          <div>Content</div>
        </Drawer>
      );

      const drawer = container.querySelector('.drawer');
      expect(drawer).toHaveClass('custom-drawer');
    });

    it('applies custom headerClassName', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} title="Title" headerClassName="custom-header">
          <div>Content</div>
        </Drawer>
      );

      const header = container.querySelector('.header');
      expect(header).toHaveClass('custom-header');
    });

    it('applies custom bodyClassName', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} bodyClassName="custom-body">
          <div>Content</div>
        </Drawer>
      );

      const body = container.querySelector('.body');
      expect(body).toHaveClass('custom-body');
    });

    it('applies custom footerClassName', () => {
      const { container } = render(
        <Drawer
          open={true}
          onClose={() => {}}
          footer={<div>Footer</div>}
          footerClassName="custom-footer"
        >
          <div>Content</div>
        </Drawer>
      );

      const footer = container.querySelector('.footer');
      expect(footer).toHaveClass('custom-footer');
    });

    it('applies custom overlayClassName', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} overlayClassName="custom-overlay">
          <div>Content</div>
        </Drawer>
      );

      const overlay = container.querySelector('.overlay');
      expect(overlay).toHaveClass('custom-overlay');
    });
  });

  describe('Z-Index', () => {
    it('applies default z-index of 1000', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}}>
          <div>Content</div>
        </Drawer>
      );

      const drawerContainer = container.querySelector('.drawerContainer') as HTMLElement;
      expect(drawerContainer.style.zIndex).toBe('1000');
    });

    it('applies custom z-index', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} zIndex={2000}>
          <div>Content</div>
        </Drawer>
      );

      const drawerContainer = container.querySelector('.drawerContainer') as HTMLElement;
      expect(drawerContainer.style.zIndex).toBe('2000');
    });
  });

  describe('Edge Cases', () => {
    it('handles drawer without title or close button', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} showCloseButton={false}>
          <div>Content</div>
        </Drawer>
      );

      const header = container.querySelector('.header');
      expect(header).not.toBeInTheDocument();
    });

    it('handles drawer with title but no close button', () => {
      const { container } = render(
        <Drawer open={true} onClose={() => {}} title="Title" showCloseButton={false}>
          <div>Content</div>
        </Drawer>
      );

      const header = container.querySelector('.header');
      expect(header).toBeInTheDocument();
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.queryByLabelText('Close drawer')).not.toBeInTheDocument();
    });

    it('handles drawer with ReactNode title', () => {
      render(
        <Drawer
          open={true}
          onClose={() => {}}
          title={
            <div>
              <span>Custom</span> <strong>Title</strong>
            </div>
          }
        >
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Custom')).toBeInTheDocument();
      expect(screen.getByText('Title')).toBeInTheDocument();
    });
  });
});
