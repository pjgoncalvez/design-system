/**
 * Carousel Component
 *
 * A carousel component for displaying a rotating set of content.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CarouselProps } from './types';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './Carousel.module.css';

/**
 * Carousel component for displaying a rotating set of content
 *
 * @example
 * ```tsx
 * <Carousel items={[
 *   { key: '1', content: <div>Slide 1</div>, alt: 'First slide' },
 *   { key: '2', content: <div>Slide 2</div>, alt: 'Second slide' }
 * ]} />
 *
 * <Carousel
 *   items={items}
 *   autoplay
 *   infinite
 *   showArrows
 *   showDots
 * />
 * ```
 */
export const Carousel: React.FC<CarouselProps> = ({
  items,
  activeIndex: controlledActiveIndex,
  defaultActiveIndex = 0,
  onChange,
  size = 'medium',
  showArrows = true,
  showDots = true,
  infinite = true,
  autoplay = false,
  autoplayInterval = 3000,
  pauseOnHover = true,
  swipeable = true,
  animated = true,
  animationDuration = 300,
  className = '',
  itemClassName = '',
  arrowClassName = '',
  dotsClassName = '',
  ...rest
}) => {
  const [uncontrolledActiveIndex, setUncontrolledActiveIndex] = useState(defaultActiveIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledActiveIndex !== undefined;
  const activeIndex = isControlled ? controlledActiveIndex : uncontrolledActiveIndex;

  // Ensure active index is within bounds
  const boundedActiveIndex = Math.max(0, Math.min(activeIndex, items.length - 1));

  const goToSlide = useCallback(
    (index: number) => {
      let newIndex = index;

      // Handle infinite loop
      if (infinite) {
        if (index < 0) {
          newIndex = items.length - 1;
        } else if (index >= items.length) {
          newIndex = 0;
        }
      } else {
        // Clamp to bounds
        newIndex = Math.max(0, Math.min(index, items.length - 1));
      }

      // Don't change if same index
      if (newIndex === boundedActiveIndex) return;

      if (animated) {
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), animationDuration);
      }

      if (!isControlled) {
        setUncontrolledActiveIndex(newIndex);
      }

      onChange?.(newIndex);
    },
    [
      infinite,
      items.length,
      boundedActiveIndex,
      animated,
      animationDuration,
      isControlled,
      onChange,
    ]
  );

  const goToPrevious = useCallback(() => {
    goToSlide(boundedActiveIndex - 1);
  }, [boundedActiveIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(boundedActiveIndex + 1);
  }, [boundedActiveIndex, goToSlide]);

  // Swipe/drag functionality
  const { handlers: swipeHandlers, isDragging } = useSwipe({
    enabled: swipeable,
    threshold: 50,
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isPaused && items.length > 1) {
      autoplayTimerRef.current = setInterval(() => {
        goToNext();
      }, autoplayInterval);

      return () => {
        if (autoplayTimerRef.current) {
          clearInterval(autoplayTimerRef.current);
        }
      };
    }
  }, [autoplay, isPaused, items.length, autoplayInterval, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(items.length - 1);
    }
  };

  // Pause/resume handlers
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
    // Also handle swipe mouse leave
    swipeHandlers.onMouseLeave();
  };

  // Check if navigation buttons should be disabled
  const isPrevDisabled = !infinite && boundedActiveIndex === 0;
  const isNextDisabled = !infinite && boundedActiveIndex === items.length - 1;

  const carouselClasses = [styles.carousel, styles[size], className].filter(Boolean).join(' ');

  const itemsContainerClasses = [
    styles.itemsContainer,
    animated && styles.animated,
    isTransitioning && styles.transitioning,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={carouselRef}
      className={carouselClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Carousel"
      aria-live={autoplay ? 'off' : 'polite'}
      {...rest}
    >
      <div
        className={itemsContainerClasses}
        {...swipeHandlers}
        style={{
          transform: `translateX(-${boundedActiveIndex * 100}%)`,
          transition:
            animated && isTransitioning ? `transform ${animationDuration}ms ease` : 'none',
          cursor: swipeable ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
      >
        {items.map((item, index) => {
          const isActive = index === boundedActiveIndex;
          const itemClasses = [styles.item, isActive && styles.active, itemClassName]
            .filter(Boolean)
            .join(' ');

          return (
            <div
              key={item.key}
              className={itemClasses}
              role="group"
              aria-roledescription="slide"
              aria-label={item.alt || `Slide ${index + 1} of ${items.length}`}
              aria-hidden={!isActive}
            >
              {item.content}
            </div>
          );
        })}
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            className={[styles.arrow, styles.arrowPrev, arrowClassName].filter(Boolean).join(' ')}
            onClick={goToPrevious}
            disabled={isPrevDisabled}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className={[styles.arrow, styles.arrowNext, arrowClassName].filter(Boolean).join(' ')}
            onClick={goToNext}
            disabled={isNextDisabled}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div
          className={[styles.dots, dotsClassName].filter(Boolean).join(' ')}
          role="tablist"
          aria-label="Carousel navigation"
        >
          {items.map((item, index) => {
            const isActive = index === boundedActiveIndex;
            return (
              <button
                key={item.key}
                type="button"
                className={[styles.dot, isActive && styles.dotActive].filter(Boolean).join(' ')}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${index + 1}`}
                aria-controls={`carousel-item-${item.key}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';

export default Carousel;
