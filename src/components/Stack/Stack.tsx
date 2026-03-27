/**
 * Stack Component
 * One-directional flex container with consistent spacing between items
 */

import React from 'react';
import { resolveResponsiveValue } from '../../utils/responsive';
import { classNames, cssVar, mergeStyles, toPixels } from '../../utils';
import { SpacingKey } from '../../styles/tokens/spacing';
import styles from './Stack.module.css';
import { StackProps } from './types';

export function Stack({
  children,
  direction = 'vertical',
  spacing = 'md',
  align,
  justify,
  wrap = false,
  divider,
  className,
  style,
  as: Component = 'div',
}: StackProps) {
  // Resolve spacing
  const spacingStyles = React.useMemo(() => {
    const spacingValue = resolveResponsiveValue(spacing);
    return cssVar('stack-spacing', toPixels(spacingValue as SpacingKey | number));
  }, [spacing]);

  // Build class names
  const stackClasses = classNames(
    styles.stack,
    styles[`stack--${direction}`],
    wrap && styles['stack--wrap'],
    align && styles[`stack--align-${align}`],
    justify && styles[`stack--justify-${justify}`],
    className
  );

  // Merge styles
  const stackStyles = mergeStyles(spacingStyles, style);

  // Render with dividers if provided
  const content = divider
    ? React.Children.toArray(children).reduce<React.ReactNode[]>((acc, child, index, array) => {
        acc.push(child);
        // Add divider between items (not after last item)
        if (index < array.length - 1) {
          acc.push(
            <div key={`divider-${index}`} className={styles.stackDivider}>
              {divider}
            </div>
          );
        }
        return acc;
      }, [])
    : children;

  return (
    <Component className={stackClasses} style={stackStyles}>
      {content}
    </Component>
  );
}
