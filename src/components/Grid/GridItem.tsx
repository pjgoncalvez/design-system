/**
 * GridItem Component
 * Individual item in the grid with responsive span/offset/order
 */

import React from 'react';
import { resolveResponsiveValue } from '../../utils/responsive';
import { classNames, mergeStyles } from '../../utils';
import { ResponsiveNumber } from '../../types';
import styles from './GridItem.module.css';
import { GridItemProps } from './types';

export function GridItem({
  children,
  span,
  offset,
  order,
  flex,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  xxxl,
  className,
  style,
  as: Component = 'div',
}: GridItemProps) {
  // Merge responsive span shortcuts with span prop
  const resolvedSpan: ResponsiveNumber = React.useMemo(() => {
    // If shortcuts are provided, they take precedence
    const shortcuts = { xs, sm, md, lg, xl, xxl, xxxl };
    const hasShortcuts = Object.values(shortcuts).some((v) => v !== undefined);

    if (hasShortcuts) {
      return shortcuts as ResponsiveNumber;
    }

    return span || 24; // Default to full width
  }, [span, xs, sm, md, lg, xl, xxl, xxxl]);

  // Build grid-column styles
  const gridStyles = React.useMemo(() => {
    const baseStyles: React.CSSProperties = {};

    // Resolve current values
    const currentSpan = resolveResponsiveValue(resolvedSpan);
    const currentOffset = offset ? resolveResponsiveValue(offset) : 0;
    const currentOrder = order ? resolveResponsiveValue(order) : undefined;

    // Calculate grid-column
    if (currentOffset > 0) {
      // With offset: start at offset + 1, span the specified columns
      baseStyles.gridColumn = `${currentOffset + 1} / span ${currentSpan}`;
    } else {
      // Without offset: just span
      baseStyles.gridColumn = `span ${currentSpan}`;
    }

    // Apply order if specified
    if (currentOrder !== undefined) {
      baseStyles.order = currentOrder;
    }

    // Apply flex if specified
    if (flex !== undefined) {
      baseStyles.flex = flex;
    }

    return baseStyles;
  }, [resolvedSpan, offset, order, flex]);

  // Build class names
  const itemClasses = classNames(
    styles.gridItem,
    flex !== undefined && styles['gridItem--flex'],
    className
  );

  // Merge styles
  const itemStyles = mergeStyles(gridStyles, style);

  return (
    <Component className={itemClasses} style={itemStyles}>
      {children}
    </Component>
  );
}
