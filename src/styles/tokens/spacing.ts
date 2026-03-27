/**
 * Spacing Tokens
 * Based on Arco Design System 4px baseline grid
 *
 * Spacing scale derived from Arco's Space component sizes:
 * - mini (xs): 4px
 * - small (sm): 8px
 * - medium (md): 16px
 * - large (lg): 24px
 *
 * Extended with additional scales for larger spacing needs.
 */

export interface SpacingTokens {
  0: number;
  xs: number; // 4px - mini
  sm: number; // 8px - small
  md: number; // 16px - medium
  lg: number; // 24px - large
  xl: number; // 32px
  '2xl': number; // 40px
  '3xl': number; // 48px
  '4xl': number; // 64px
  '5xl': number; // 80px
}

/**
 * Spacing scale values in pixels
 */
export const spacing: SpacingTokens = {
  0: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
  '5xl': 80,
};

export type SpacingKey = keyof SpacingTokens;
export type SpacingValue = SpacingTokens[SpacingKey];

/**
 * Get spacing value in pixels
 * @param key - The spacing key
 * @returns The spacing value in pixels
 *
 * @example
 * ```ts
 * getSpacing('md') // 16
 * getSpacing('lg') // 24
 * ```
 */
export function getSpacing(key: SpacingKey): number {
  return spacing[key];
}

/**
 * Get spacing value in rem units (base 16px)
 * @param key - The spacing key
 * @returns The spacing value in rem
 *
 * @example
 * ```ts
 * getSpacingRem('md') // '1rem'
 * getSpacingRem('lg') // '1.5rem'
 * ```
 */
export function getSpacingRem(key: SpacingKey): string {
  return `${spacing[key] / 16}rem`;
}

/**
 * Create a spacing style object for a given property
 * @param property - The CSS property (margin or padding)
 * @param value - The spacing key or number value
 * @returns A style object with the spacing applied
 *
 * @example
 * ```ts
 * createSpacingStyle('margin', 'md') // { margin: '16px' }
 * createSpacingStyle('padding', 32) // { padding: '32px' }
 * ```
 */
export function createSpacingStyle(
  property: 'margin' | 'padding',
  value: SpacingKey | number
): Record<string, string> {
  const px = typeof value === 'number' ? value : spacing[value];
  return { [property]: `${px}px` };
}
