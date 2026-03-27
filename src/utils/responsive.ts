/**
 * Responsive Utilities
 * Helper functions for working with responsive values
 */

import { Breakpoint, breakpointOrder, getCurrentBreakpoint } from '../styles/tokens/breakpoints';
import { ResponsiveValue } from '../types/responsive';

/**
 * Resolve a responsive value to a single value based on current breakpoint
 * Finds the nearest defined value at or below the current breakpoint
 *
 * @param value - The responsive value to resolve
 * @param currentBreakpoint - Optional specific breakpoint to resolve for (defaults to current)
 * @returns The resolved value
 *
 * @example
 * ```ts
 * resolveResponsiveValue({ xs: 8, md: 16, lg: 24 }, 'lg') // 24
 * resolveResponsiveValue({ xs: 8, lg: 24 }, 'md') // 8 (nearest defined)
 * resolveResponsiveValue(16) // 16 (not responsive)
 * ```
 */
export function resolveResponsiveValue<T>(
  value: ResponsiveValue<T>,
  currentBreakpoint?: Breakpoint
): T {
  // If not responsive (primitive value), return as-is
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return value as T;
  }

  // Type assertion for responsive object
  const responsiveValue = value as Partial<Record<Breakpoint, T>>;

  // Get current breakpoint
  const breakpoint = currentBreakpoint || getCurrentBreakpoint();

  // Find the nearest defined value at or below current breakpoint
  const currentIndex = breakpointOrder.indexOf(breakpoint);

  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    if (bp in responsiveValue && responsiveValue[bp] !== undefined) {
      return responsiveValue[bp] as T;
    }
  }

  // Fallback to first defined value
  for (const bp of breakpointOrder) {
    if (bp in responsiveValue && responsiveValue[bp] !== undefined) {
      return responsiveValue[bp] as T;
    }
  }

  // Should never reach here with valid input
  return undefined as T;
}

/**
 * Generate responsive CSS properties with media queries
 *
 * @param property - The CSS property name
 * @param value - The responsive value
 * @param formatter - Optional formatter function to convert value to CSS string
 * @returns An object with the base value and responsive properties
 *
 * @example
 * ```ts
 * generateResponsiveStyles('gap', { xs: 8, md: 16 }, (v) => `${v}px`)
 * // Returns: { 'gap-xs': '8px', 'gap-md': '16px' }
 * ```
 */
export function generateResponsiveStyles<T>(
  property: string,
  value: ResponsiveValue<T>,
  formatter: (val: T) => string = String
): Record<string, string> {
  // If not responsive, return simple style
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return { [property]: formatter(value as T) };
  }

  // Type assertion for responsive object
  const responsiveValue = value as Partial<Record<Breakpoint, T>>;

  // Generate media query styles
  const styles: Record<string, string> = {};

  for (const bp of breakpointOrder) {
    if (bp in responsiveValue && responsiveValue[bp] !== undefined) {
      styles[`${property}-${bp}`] = formatter(responsiveValue[bp] as T);
    }
  }

  return styles;
}

/**
 * Get all defined breakpoints from a responsive value
 *
 * @param value - The responsive value
 * @returns Array of breakpoints that have defined values
 *
 * @example
 * ```ts
 * getDefinedBreakpoints({ xs: 8, md: 16, xl: 24 })
 * // Returns: ['xs', 'md', 'xl']
 * ```
 */
export function getDefinedBreakpoints<T>(value: ResponsiveValue<T>): Breakpoint[] {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return [];
  }

  // Type assertion for responsive object
  const responsiveValue = value as Partial<Record<Breakpoint, T>>;

  return breakpointOrder.filter((bp) => bp in responsiveValue && responsiveValue[bp] !== undefined);
}
