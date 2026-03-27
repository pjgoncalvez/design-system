/**
 * Style Utilities
 * Helper functions for working with CSS styles
 */

import { spacing, SpacingKey } from '../styles/tokens/spacing';

/**
 * Convert spacing key or number to pixel string
 *
 * @param value - Spacing token key or number
 * @returns Pixel value as a string
 *
 * @example
 * ```ts
 * toPixels('md') // '16px'
 * toPixels(32) // '32px'
 * ```
 */
export function toPixels(value: SpacingKey | number): string {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return `${spacing[value]}px`;
}

/**
 * Merge multiple style objects into one
 * Later objects override earlier ones
 *
 * @param styles - Array of style objects (can include undefined)
 * @returns Merged style object
 *
 * @example
 * ```ts
 * mergeStyles({ color: 'red' }, { fontSize: '16px' })
 * // Returns: { color: 'red', fontSize: '16px' }
 *
 * mergeStyles({ color: 'red' }, undefined, { color: 'blue' })
 * // Returns: { color: 'blue' }
 * ```
 */
export function mergeStyles(...styles: (React.CSSProperties | undefined)[]): React.CSSProperties {
  return Object.assign({}, ...styles.filter(Boolean));
}

/**
 * Create a CSS custom property (CSS variable) object
 *
 * @param name - The variable name (without -- prefix)
 * @param value - The variable value
 * @returns An object with the CSS variable
 *
 * @example
 * ```ts
 * cssVar('grid-gutter', 16)
 * // Returns: { '--grid-gutter': '16' }
 * ```
 */
export function cssVar(name: string, value: string | number): Record<string, string> {
  return { [`--${name}`]: String(value) };
}
