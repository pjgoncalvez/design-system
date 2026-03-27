/**
 * Container Component
 * A responsive container with max-widths at each breakpoint
 */

import { containerPadding } from '../../styles/tokens/layout';
import { classNames, cssVar, mergeStyles } from '../../utils';
import styles from './Container.module.css';
import { ContainerProps } from './types';

export function Container({
  children,
  fluid = false,
  maxWidth,
  disablePadding = false,
  className,
  style,
  as: Component = 'div',
}: ContainerProps) {
  // Build class names
  const containerClasses = classNames(
    styles.container,
    fluid && styles['container--fluid'],
    !disablePadding && styles['container--padded'],
    className
  );

  // Build inline styles with CSS custom properties
  const containerStyles = mergeStyles(
    // Custom max-width if provided
    maxWidth ? { maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth } : undefined,
    // Container padding (responsive via CSS vars)
    !disablePadding
      ? {
          ...cssVar('container-padding', `${containerPadding.xs}px`),
        }
      : undefined,
    // User-provided styles
    style
  );

  return (
    <Component className={containerClasses} style={containerStyles}>
      {children}
    </Component>
  );
}
