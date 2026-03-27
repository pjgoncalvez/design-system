/**
 * Layout Tokens
 * Container max-widths, padding, and grid configuration
 * Based on Arco Design System grid specifications
 */

import { BreakpointTokens } from './breakpoints';

export interface ContainerTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

/**
 * Container max-widths at each breakpoint
 * Values are slightly smaller than breakpoint to provide comfortable margins
 *
 * Strategy:
 * - xs: Full width on mobile
 * - sm: 540px (576 - 36px margin)
 * - md: 720px (768 - 48px margin)
 * - lg: 960px (992 - 32px margin)
 * - xl: 1152px (1200 - 48px margin)
 * - xxl: 1536px (1600 - 64px margin)
 * - xxxl: 1920px (2000 - 80px margin)
 */
export const containerMaxWidths: ContainerTokens = {
  xs: '100%', // Full width on mobile
  sm: '540px', // Small tablets
  md: '720px', // Tablets
  lg: '960px', // Small desktops
  xl: '1152px', // Desktops
  xxl: '1536px', // Large desktops
  xxxl: '1920px', // Ultra-wide displays
};

/**
 * Container padding at each breakpoint (in pixels)
 * Provides breathing room on smaller screens
 */
export const containerPadding: BreakpointTokens = {
  xs: 16, // 16px sides on mobile
  sm: 24, // 24px sides on small tablets
  md: 24, // 24px sides on tablets
  lg: 32, // 32px sides on small desktops
  xl: 32, // 32px sides on desktops
  xxl: 40, // 40px sides on large desktops
  xxxl: 40, // 40px sides on ultra-wide
};

/**
 * Grid configuration interface
 */
export interface GridConfig {
  columns: number;
  gutterBase: number;
  gutterSizes: Record<string, number>;
}

/**
 * Grid configuration
 * Arco Design uses a 24-column grid system
 */
export const gridConfig: GridConfig = {
  /** Number of columns in the grid */
  columns: 24,

  /** Base gutter size (from design-tokens.json) */
  gutterBase: 0,

  /** Recommended gutter sizes at each breakpoint */
  gutterSizes: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 24,
    xxxl: 24,
  },
};
