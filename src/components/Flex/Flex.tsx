/**
 * Flex Component
 * Generic flex container with full control over flex properties
 */

import React from 'react';
import { resolveResponsiveValue } from '../../utils/responsive';
import { classNames, cssVar, mergeStyles, toPixels } from '../../utils';
import { SpacingKey } from '../../styles/tokens/spacing';
import styles from './Flex.module.css';
import { FlexProps } from './types';

export function Flex({
  children,
  direction = 'row',
  wrap = 'nowrap',
  align,
  justify,
  gap,
  inline = false,
  className,
  style,
  as: Component = 'div',
}: FlexProps) {
  // Resolve gap
  const gapStyles = React.useMemo(() => {
    if (!gap) {
      return undefined;
    }
    const gapValue = resolveResponsiveValue(gap);
    return cssVar('flex-gap', toPixels(gapValue as SpacingKey | number));
  }, [gap]);

  // Build class names
  const flexClasses = classNames(
    styles.flex,
    inline && styles['flex--inline'],
    styles[`flex--${direction}`],
    styles[`flex--${wrap}`],
    align && styles[`flex--align-${align}`],
    justify && styles[`flex--justify-${justify}`],
    className
  );

  // Merge styles
  const flexStyles = mergeStyles(gapStyles, style);

  return (
    <Component className={flexClasses} style={flexStyles}>
      {children}
    </Component>
  );
}
