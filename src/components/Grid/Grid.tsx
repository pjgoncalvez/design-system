/**
 * Grid Component
 * 24-column responsive grid system based on CSS Grid
 */

import React from 'react';
import { resolveResponsiveValue } from '../../utils/responsive';
import { classNames, cssVar, mergeStyles, toPixels } from '../../utils';
import { SpacingKey } from '../../styles/tokens/spacing';
import { ResponsiveSpacing } from '../../types';
import styles from './Grid.module.css';
import { GridProps } from './types';

export function Grid({
  children,
  gutter,
  align,
  justify,
  className,
  style,
  as: Component = 'div',
}: GridProps) {
  // Handle gutter
  const gutterStyles = React.useMemo(() => {
    if (!gutter) {
      return undefined;
    }

    // Check if gutter is a tuple [horizontal, vertical]
    if (Array.isArray(gutter)) {
      const [horizontal, vertical] = gutter;
      const colGutter = resolveResponsiveValue(horizontal as ResponsiveSpacing);
      const rowGutter = resolveResponsiveValue(vertical as ResponsiveSpacing);

      return {
        ...cssVar('grid-gutter-col', toPixels(colGutter as SpacingKey | number)),
        ...cssVar('grid-gutter-row', toPixels(rowGutter as SpacingKey | number)),
      };
    }

    // Single gutter value for both directions
    const gutterValue = resolveResponsiveValue(gutter as ResponsiveSpacing);
    const gutterPx = toPixels(gutterValue as SpacingKey | number);

    return {
      ...cssVar('grid-gutter-col', gutterPx),
      ...cssVar('grid-gutter-row', gutterPx),
    };
  }, [gutter]);

  // Build class names
  const gridClasses = classNames(
    styles.grid,
    align && styles[`grid--align-${align}`],
    justify && styles[`grid--justify-${justify}`],
    className
  );

  // Merge styles
  const gridStyles = mergeStyles(gutterStyles, style);

  return (
    <Component className={gridClasses} style={gridStyles}>
      {children}
    </Component>
  );
}
