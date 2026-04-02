/**
 * Carousel Component Types
 *
 * Types for the Carousel component based on design system specifications.
 */

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Carousel size options
 */
export type CarouselSize = 'small' | 'medium' | 'large';

/**
 * Carousel item configuration
 */
export interface CarouselItem {
  /**
   * Unique key for the carousel item
   */
  key: string;

  /**
   * Content to display in the carousel item
   */
  content: ReactNode;

  /**
   * Alternative text for accessibility
   */
  alt?: string;
}

/**
 * Props for the Carousel component
 */
export interface CarouselProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of carousel items
   */
  items: CarouselItem[];

  /**
   * Active item index (controlled mode)
   */
  activeIndex?: number;

  /**
   * Default active item index (uncontrolled mode)
   * @default 0
   */
  defaultActiveIndex?: number;

  /**
   * Callback when active item changes
   */
  onChange?: (index: number) => void;

  /**
   * Size of the carousel
   * @default 'medium'
   */
  size?: CarouselSize;

  /**
   * Whether to show navigation arrows
   * @default true
   */
  showArrows?: boolean;

  /**
   * Whether to show dot indicators
   * @default true
   */
  showDots?: boolean;

  /**
   * Whether to enable infinite loop
   * @default true
   */
  infinite?: boolean;

  /**
   * Whether to enable autoplay
   * @default false
   */
  autoplay?: boolean;

  /**
   * Autoplay interval in milliseconds
   * @default 3000
   */
  autoplayInterval?: number;

  /**
   * Whether to pause autoplay on hover
   * @default true
   */
  pauseOnHover?: boolean;

  /**
   * Whether to enable swipe/drag gestures
   * @default true
   */
  swipeable?: boolean;

  /**
   * Whether to animate transitions
   * @default true
   */
  animated?: boolean;

  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional CSS class name for carousel items
   */
  itemClassName?: string;

  /**
   * Additional CSS class name for navigation arrows
   */
  arrowClassName?: string;

  /**
   * Additional CSS class name for dot indicators
   */
  dotsClassName?: string;
}
