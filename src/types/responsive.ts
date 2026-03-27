/**
 * Responsive Type Definitions
 * Types for responsive properties and layout system
 */

import { Breakpoint } from '../styles/tokens/breakpoints';
import { SpacingKey } from '../styles/tokens/spacing';

/**
 * Responsive value type
 * Can be a single value or an object with breakpoint-specific values
 *
 * @example
 * ```ts
 * // Single value
 * const gutter: ResponsiveValue<number> = 16;
 *
 * // Responsive object
 * const gutter: ResponsiveValue<number> = { xs: 8, md: 16, lg: 24 };
 * ```
 */
export type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

/**
 * Responsive number type
 * For numeric values that can be responsive (span, offset, etc.)
 */
export type ResponsiveNumber = ResponsiveValue<number>;

/**
 * Responsive spacing type
 * For spacing values using spacing tokens or numbers
 */
export type ResponsiveSpacing = ResponsiveValue<SpacingKey | number>;

/**
 * Responsive boolean type
 * For boolean flags that can be responsive
 */
export type ResponsiveBoolean = ResponsiveValue<boolean>;

/**
 * Alignment types for flexbox and grid
 */
export type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

/**
 * Justify content types for flexbox and grid
 */
export type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

/**
 * Flex direction types
 */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Flex wrap types
 */
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * Common props interface for layout components
 */
export interface ResponsiveProps {
  /** Additional CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}
