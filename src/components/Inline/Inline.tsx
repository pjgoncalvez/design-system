/**
 * Inline Component
 * Wrapping flex container for inline content with consistent spacing
 */

import React from 'react';
import { resolveResponsiveValue } from '../../utils/responsive';
import { classNames, cssVar, mergeStyles, toPixels } from '../../utils';
import { SpacingKey } from '../../styles/tokens/spacing';
import styles from './Inline.module.css';
import { InlineProps } from './types';

export function Inline({
  children,
  spacing = 'sm',
  align,
  justify,
  className,
  style,
  as: Component = 'div',
}: InlineProps) {
  // Resolve spacing
  const spacingStyles = React.useMemo(() => {
    const spacingValue = resolveResponsiveValue(spacing);
    return cssVar('inline-spacing', toPixels(spacingValue as SpacingKey | number));
  }, [spacing]);

  // Build class names
  const inlineClasses = classNames(
    styles.inline,
    align && styles[`inline--align-${align}`],
    justify && styles[`inline--justify-${justify}`],
    className
  );

  // Merge styles
  const inlineStyles = mergeStyles(spacingStyles, style);

  return (
    <Component className={inlineClasses} style={inlineStyles}>
      {children}
    </Component>
  );
}
