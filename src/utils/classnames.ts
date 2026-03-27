/**
 * Classname Utilities
 * Helper functions for working with CSS class names
 */

/**
 * Combine multiple class names, filtering out falsy values
 * Similar to the popular 'classnames' or 'clsx' libraries
 *
 * @param classes - Array of class names (can include undefined, null, false)
 * @returns A single space-separated string of valid class names
 *
 * @example
 * ```ts
 * classNames('foo', 'bar') // 'foo bar'
 * classNames('foo', undefined, 'bar', null, false) // 'foo bar'
 * classNames('foo', condition && 'bar') // 'foo bar' or 'foo'
 * ```
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Create responsive class names by appending breakpoint modifiers
 *
 * @param baseClass - The base class name
 * @param breakpoints - Array of breakpoint suffixes
 * @returns A space-separated string of responsive class names
 *
 * @example
 * ```ts
 * responsiveClassName('grid', ['xs', 'md'])
 * // Returns: 'grid grid--xs grid--md'
 * ```
 */
export function responsiveClassName(baseClass: string, breakpoints: string[]): string {
  return classNames(baseClass, ...breakpoints.map((bp) => `${baseClass}--${bp}`));
}
