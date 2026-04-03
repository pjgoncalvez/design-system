/**
 * Carousel Component Tests
 *
 * Unit tests for the Carousel component.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Carousel } from './Carousel';
import { CarouselItem } from './types';

const basicItems: CarouselItem[] = [
  { key: '1', content: <div>Slide 1</div>, alt: 'First slide' },
  { key: '2', content: <div>Slide 2</div>, alt: 'Second slide' },
  { key: '3', content: <div>Slide 3</div>, alt: 'Third slide' },
];

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe('Rendering', () => {
    it('renders all carousel items', () => {
      render(<Carousel items={basicItems} />);
      expect(screen.getByText('Slide 1')).toBeInTheDocument();
      expect(screen.getByText('Slide 2')).toBeInTheDocument();
      expect(screen.getByText('Slide 3')).toBeInTheDocument();
    });

    it('renders first item as active by default', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
      expect(items[1]).not.toHaveClass('active');
      expect(items[2]).not.toHaveClass('active');
    });

    it('renders with default size (medium)', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveClass('medium');
    });

    it('renders navigation arrows by default', () => {
      render(<Carousel items={basicItems} />);
      expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
      expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
    });

    it('renders dots by default', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const dots = container.querySelectorAll('.dot');
      expect(dots.length).toBe(3);
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Carousel items={basicItems} size="small" />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveClass('small');
    });

    it('renders medium size', () => {
      const { container } = render(<Carousel items={basicItems} size="medium" />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveClass('medium');
    });

    it('renders large size', () => {
      const { container } = render(<Carousel items={basicItems} size="large" />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveClass('large');
    });
  });

  describe('Navigation Arrows', () => {
    it('hides arrows when showArrows is false', () => {
      render(<Carousel items={basicItems} showArrows={false} />);
      expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument();
    });

    it('navigates to next slide when next button is clicked', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const nextButton = screen.getByLabelText('Next slide');

      fireEvent.click(nextButton);

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('navigates to previous slide when previous button is clicked', () => {
      const { container } = render(<Carousel items={basicItems} defaultActiveIndex={1} />);
      const prevButton = screen.getByLabelText('Previous slide');

      fireEvent.click(prevButton);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('disables previous arrow at first slide when infinite is false', () => {
      render(<Carousel items={basicItems} infinite={false} />);
      const prevButton = screen.getByLabelText('Previous slide');
      expect(prevButton).toBeDisabled();
    });

    it('disables next arrow at last slide when infinite is false', () => {
      render(<Carousel items={basicItems} infinite={false} defaultActiveIndex={2} />);
      const nextButton = screen.getByLabelText('Next slide');
      expect(nextButton).toBeDisabled();
    });
  });

  describe('Dots Indicators', () => {
    it('hides dots when showDots is false', () => {
      const { container } = render(<Carousel items={basicItems} showDots={false} />);
      const dots = container.querySelectorAll('.dot');
      expect(dots.length).toBe(0);
    });

    it('renders correct number of dots', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const dots = container.querySelectorAll('.dot');
      expect(dots.length).toBe(3);
    });

    it('marks first dot as active by default', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const dots = container.querySelectorAll('.dot');
      expect(dots[0]).toHaveClass('dotActive');
      expect(dots[1]).not.toHaveClass('dotActive');
      expect(dots[2]).not.toHaveClass('dotActive');
    });

    it('navigates to corresponding slide when dot is clicked', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const dots = container.querySelectorAll('.dot');

      fireEvent.click(dots[2]);

      const items = container.querySelectorAll('.item');
      expect(items[2]).toHaveClass('active');
      expect(dots[2]).toHaveClass('dotActive');
    });
  });

  describe('Infinite Loop', () => {
    it('loops to last slide when clicking previous at first slide', () => {
      const { container } = render(<Carousel items={basicItems} infinite={true} />);
      const prevButton = screen.getByLabelText('Previous slide');

      fireEvent.click(prevButton);

      const items = container.querySelectorAll('.item');
      expect(items[2]).toHaveClass('active');
    });

    it('loops to first slide when clicking next at last slide', () => {
      const { container } = render(
        <Carousel items={basicItems} infinite={true} defaultActiveIndex={2} />
      );
      const nextButton = screen.getByLabelText('Next slide');

      fireEvent.click(nextButton);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('does not loop when infinite is false', () => {
      const { container } = render(<Carousel items={basicItems} infinite={false} />);
      const prevButton = screen.getByLabelText('Previous slide');

      fireEvent.click(prevButton);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active'); // Should stay on first
    });
  });

  describe('Default Active Index', () => {
    it('uses defaultActiveIndex when provided', () => {
      const { container } = render(<Carousel items={basicItems} defaultActiveIndex={1} />);
      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('uses 0 as default when defaultActiveIndex is not provided', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });
  });

  describe('Uncontrolled Mode', () => {
    it('updates active slide when navigating', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const nextButton = screen.getByLabelText('Next slide');

      fireEvent.click(nextButton);

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');

      fireEvent.click(nextButton);
      expect(items[2]).toHaveClass('active');
    });

    it('calls onChange when slide changes', () => {
      const handleChange = vi.fn();
      render(<Carousel items={basicItems} onChange={handleChange} />);
      const nextButton = screen.getByLabelText('Next slide');

      fireEvent.click(nextButton);
      expect(handleChange).toHaveBeenCalledWith(1);

      fireEvent.click(nextButton);
      expect(handleChange).toHaveBeenCalledWith(2);
    });
  });

  describe('Controlled Mode', () => {
    it('uses activeIndex prop to control active slide', () => {
      const { container, rerender } = render(<Carousel items={basicItems} activeIndex={0} />);
      let items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');

      rerender(<Carousel items={basicItems} activeIndex={1} />);
      items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');

      rerender(<Carousel items={basicItems} activeIndex={2} />);
      items = container.querySelectorAll('.item');
      expect(items[2]).toHaveClass('active');
    });

    it('calls onChange but does not change slide automatically', () => {
      const handleChange = vi.fn();
      const { container } = render(
        <Carousel items={basicItems} activeIndex={0} onChange={handleChange} />
      );
      const nextButton = screen.getByLabelText('Next slide');

      fireEvent.click(nextButton);

      expect(handleChange).toHaveBeenCalledWith(1);
      // Slide should not change because it's controlled
      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });
  });

  describe('Autoplay', () => {
    it('does not autoplay by default', () => {
      const { container } = render(<Carousel items={basicItems} />);

      vi.advanceTimersByTime(5000);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('advances to next slide automatically when autoplay is enabled', () => {
      const { container } = render(
        <Carousel items={basicItems} autoplay autoplayInterval={1000} />
      );

      act(() => {
        vi.advanceTimersByTime(1000);
      });

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('continues autoplay through multiple slides', () => {
      const { container } = render(
        <Carousel items={basicItems} autoplay autoplayInterval={1000} />
      );

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      let items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');

      act(() => {
        vi.advanceTimersByTime(1000);
      });
      items = container.querySelectorAll('.item');
      expect(items[2]).toHaveClass('active');
    });

    it('pauses autoplay on hover when pauseOnHover is true', () => {
      const { container } = render(
        <Carousel items={basicItems} autoplay autoplayInterval={1000} pauseOnHover />
      );

      const carousel = container.querySelector('.carousel');
      fireEvent.mouseEnter(carousel!);

      vi.advanceTimersByTime(2000);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('resumes autoplay on mouse leave', async () => {
      const { container } = render(
        <Carousel items={basicItems} autoplay autoplayInterval={1000} pauseOnHover />
      );

      const carousel = container.querySelector('.carousel');
      fireEvent.mouseEnter(carousel!);
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      fireEvent.mouseLeave(carousel!);

      await act(async () => {
        vi.advanceTimersByTime(1000);
      });

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });
  });

  describe('Keyboard Navigation', () => {
    it('navigates to next slide on ArrowRight', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const carousel = container.querySelector('.carousel');

      fireEvent.keyDown(carousel!, { key: 'ArrowRight' });

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('navigates to previous slide on ArrowLeft', () => {
      const { container } = render(<Carousel items={basicItems} defaultActiveIndex={1} />);
      const carousel = container.querySelector('.carousel');

      fireEvent.keyDown(carousel!, { key: 'ArrowLeft' });

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('navigates to first slide on Home key', () => {
      const { container } = render(<Carousel items={basicItems} defaultActiveIndex={2} />);
      const carousel = container.querySelector('.carousel');

      fireEvent.keyDown(carousel!, { key: 'Home' });

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('navigates to last slide on End key', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const carousel = container.querySelector('.carousel');

      fireEvent.keyDown(carousel!, { key: 'End' });

      const items = container.querySelectorAll('.item');
      expect(items[2]).toHaveClass('active');
    });
  });

  describe('Touch/Swipe Gestures', () => {
    it('navigates to next slide on swipe left', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.touchStart(itemsContainer!, {
        targetTouches: [{ clientX: 100, clientY: 0 }],
      });
      fireEvent.touchMove(itemsContainer!, {
        targetTouches: [{ clientX: 0, clientY: 0 }],
      });
      fireEvent.touchEnd(itemsContainer!);

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('navigates to previous slide on swipe right', () => {
      const { container } = render(
        <Carousel items={basicItems} defaultActiveIndex={1} swipeable />
      );
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.touchStart(itemsContainer!, {
        targetTouches: [{ clientX: 0, clientY: 0 }],
      });
      fireEvent.touchMove(itemsContainer!, {
        targetTouches: [{ clientX: 100, clientY: 0 }],
      });
      fireEvent.touchEnd(itemsContainer!);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('does not navigate on short swipe', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.touchStart(itemsContainer!, {
        targetTouches: [{ clientX: 100, clientY: 0 }],
      });
      fireEvent.touchMove(itemsContainer!, {
        targetTouches: [{ clientX: 90, clientY: 0 }],
      });
      fireEvent.touchEnd(itemsContainer!);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active'); // Should stay on first
    });

    it('does not respond to swipe when swipeable is false', () => {
      const { container } = render(<Carousel items={basicItems} swipeable={false} />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.touchStart(itemsContainer!, {
        targetTouches: [{ clientX: 100, clientY: 0 }],
      });
      fireEvent.touchMove(itemsContainer!, {
        targetTouches: [{ clientX: 0, clientY: 0 }],
      });
      fireEvent.touchEnd(itemsContainer!);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active'); // Should not change
    });
  });

  describe('Accessibility', () => {
    it('sets correct ARIA attributes on carousel', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveAttribute('role', 'region');
      expect(carousel).toHaveAttribute('aria-label', 'Carousel');
    });

    it('sets aria-live to off when autoplay is enabled', () => {
      const { container } = render(<Carousel items={basicItems} autoplay />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveAttribute('aria-live', 'off');
    });

    it('sets aria-live to polite when autoplay is disabled', () => {
      const { container } = render(<Carousel items={basicItems} autoplay={false} />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveAttribute('aria-live', 'polite');
    });

    it('sets correct ARIA attributes on slides', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const items = container.querySelectorAll('.item');

      expect(items[0]).toHaveAttribute('role', 'group');
      expect(items[0]).toHaveAttribute('aria-roledescription', 'slide');
      expect(items[0]).toHaveAttribute('aria-label', 'First slide');
      expect(items[0]).toHaveAttribute('aria-hidden', 'false');

      expect(items[1]).toHaveAttribute('aria-hidden', 'true');
    });

    it('sets correct ARIA attributes on dots', () => {
      const { container } = render(<Carousel items={basicItems} />);
      const dots = container.querySelectorAll('.dot');

      expect(dots[0]).toHaveAttribute('role', 'tab');
      expect(dots[0]).toHaveAttribute('aria-selected', 'true');
      expect(dots[1]).toHaveAttribute('aria-selected', 'false');
    });
  });

  describe('Mouse Drag Gestures', () => {
    it('navigates to next slide on mouse drag left', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.mouseDown(itemsContainer!, { clientX: 100 });
      fireEvent.mouseMove(itemsContainer!, { clientX: 0 });
      fireEvent.mouseUp(itemsContainer!, { clientX: 0 });

      const items = container.querySelectorAll('.item');
      expect(items[1]).toHaveClass('active');
    });

    it('navigates to previous slide on mouse drag right', () => {
      const { container } = render(
        <Carousel items={basicItems} defaultActiveIndex={1} swipeable />
      );
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.mouseDown(itemsContainer!, { clientX: 0 });
      fireEvent.mouseMove(itemsContainer!, { clientX: 100 });
      fireEvent.mouseUp(itemsContainer!, { clientX: 100 });

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('does not navigate on short mouse drag', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.mouseDown(itemsContainer!, { clientX: 100 });
      fireEvent.mouseMove(itemsContainer!, { clientX: 90 });
      fireEvent.mouseUp(itemsContainer!, { clientX: 90 });

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('does not respond to mouse drag when swipeable is false', () => {
      const { container } = render(<Carousel items={basicItems} swipeable={false} />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.mouseDown(itemsContainer!, { clientX: 100 });
      fireEvent.mouseMove(itemsContainer!, { clientX: 0 });
      fireEvent.mouseUp(itemsContainer!, { clientX: 0 });

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('cancels drag when mouse leaves container', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer');

      fireEvent.mouseDown(itemsContainer!, { clientX: 100 });
      fireEvent.mouseMove(itemsContainer!, { clientX: 50 });
      fireEvent.mouseLeave(itemsContainer!);

      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('active');
    });

    it('shows grab cursor when swipeable is enabled', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer') as HTMLElement;
      expect(itemsContainer.style.cursor).toBe('grab');
    });

    it('shows grabbing cursor while dragging', () => {
      const { container } = render(<Carousel items={basicItems} swipeable />);
      const itemsContainer = container.querySelector('.itemsContainer') as HTMLElement;

      fireEvent.mouseDown(itemsContainer!, { clientX: 100 });
      expect(itemsContainer.style.cursor).toBe('grabbing');

      fireEvent.mouseUp(itemsContainer!, { clientX: 50 });
      expect(itemsContainer.style.cursor).toBe('grab');
    });
  });

  describe('Custom Class Names', () => {
    it('applies custom className to root element', () => {
      const { container } = render(<Carousel items={basicItems} className="custom-carousel" />);
      const carousel = container.querySelector('.carousel');
      expect(carousel).toHaveClass('custom-carousel');
    });

    it('applies custom itemClassName to items', () => {
      const { container } = render(<Carousel items={basicItems} itemClassName="custom-item" />);
      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveClass('custom-item');
    });

    it('applies custom arrowClassName to arrows', () => {
      const { container } = render(<Carousel items={basicItems} arrowClassName="custom-arrow" />);
      const arrows = container.querySelectorAll('.arrow');
      expect(arrows[0]).toHaveClass('custom-arrow');
      expect(arrows[1]).toHaveClass('custom-arrow');
    });

    it('applies custom dotsClassName to dots container', () => {
      const { container } = render(<Carousel items={basicItems} dotsClassName="custom-dots" />);
      const dots = container.querySelector('.dots');
      expect(dots).toHaveClass('custom-dots');
    });
  });

  describe('Edge Cases', () => {
    it('handles single item', () => {
      const singleItem: CarouselItem[] = [
        { key: '1', content: <div>Only slide</div>, alt: 'Only slide' },
      ];
      render(<Carousel items={singleItem} />);

      expect(screen.getByText('Only slide')).toBeInTheDocument();
    });

    it('does not show arrows for single item', () => {
      const singleItem: CarouselItem[] = [
        { key: '1', content: <div>Only slide</div>, alt: 'Only slide' },
      ];
      render(<Carousel items={singleItem} />);

      expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument();
    });

    it('does not show dots for single item', () => {
      const singleItem: CarouselItem[] = [
        { key: '1', content: <div>Only slide</div>, alt: 'Only slide' },
      ];
      const { container } = render(<Carousel items={singleItem} />);
      const dots = container.querySelectorAll('.dot');
      expect(dots.length).toBe(0);
    });

    it('handles empty alt text', () => {
      const itemsWithoutAlt: CarouselItem[] = [
        { key: '1', content: <div>Slide 1</div> },
        { key: '2', content: <div>Slide 2</div> },
      ];
      const { container } = render(<Carousel items={itemsWithoutAlt} />);
      const items = container.querySelectorAll('.item');
      expect(items[0]).toHaveAttribute('aria-label', 'Slide 1 of 2');
    });
  });
});
