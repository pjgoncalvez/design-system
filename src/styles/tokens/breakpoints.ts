/**
 * Breakpoint Tokens
 * Based on Arco Design System responsive breakpoints
 *
 * Breakpoint values:
 * - xs: < 576px (Extra small devices - phones)
 * - sm: ≥ 576px (Small devices - large phones, small tablets)
 * - md: ≥ 768px (Medium devices - tablets)
 * - lg: ≥ 992px (Large devices - small desktops)
 * - xl: ≥ 1200px (Extra large devices - desktops)
 * - xxl: ≥ 1600px (Extra extra large devices - large desktops)
 * - xxxl: ≥ 2000px (Triple extra large devices - ultra-wide displays)
 */

export interface BreakpointTokens {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

/**
 * Breakpoint values in pixels
 * Following Arco Design System's 7-level responsive system
 */
export const breakpoints: BreakpointTokens = {
  xs: 0, // Mobile first - no min-width
  sm: 576, // Small tablets and large phones
  md: 768, // Tablets
  lg: 992, // Small desktops and laptops
  xl: 1200, // Desktops
  xxl: 1600, // Large desktops
  xxxl: 2000, // Extra large displays
};

export type Breakpoint = keyof BreakpointTokens;
export type BreakpointValue = BreakpointTokens[Breakpoint];

/**
 * Breakpoint order from smallest to largest
 * Used for resolving responsive values
 */
export const breakpointOrder: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

/**
 * Get a media query string for a given breakpoint
 * @param breakpoint - The breakpoint key
 * @returns A media query string, or empty string for 'xs'
 *
 * @example
 * ```ts
 * getMediaQuery('md') // '@media (min-width: 768px)'
 * getMediaQuery('xs') // ''
 * ```
 */
export function getMediaQuery(breakpoint: Breakpoint): string {
  const value = breakpoints[breakpoint];
  return value === 0 ? '' : `@media (min-width: ${value}px)`;
}

/**
 * Check if a breakpoint is currently active (client-side only)
 * @param breakpoint - The breakpoint key
 * @returns Whether the breakpoint is active
 *
 * @example
 * ```ts
 * isBreakpointActive('md') // true if window width >= 768px
 * ```
 */
export function isBreakpointActive(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  const value = breakpoints[breakpoint];
  return value === 0 || window.innerWidth >= value;
}

/**
 * Get the current active breakpoint (client-side only)
 * Returns the largest breakpoint that matches the current window width
 *
 * @returns The current breakpoint
 *
 * @example
 * ```ts
 * getCurrentBreakpoint() // 'lg' if window width is 1100px
 * ```
 */
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'xs';

  const width = window.innerWidth;
  if (width >= breakpoints.xxxl) return 'xxxl';
  if (width >= breakpoints.xxl) return 'xxl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
}
