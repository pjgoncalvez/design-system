/**
 * Grid Component Types
 */

import { ResponsiveNumber, ResponsiveSpacing, AlignItems, JustifyContent } from '../../types';

export interface GridProps {
  /** Grid items */
  children: React.ReactNode;

  /**
   * Gutter spacing between grid items
   * Can be a single value or [horizontal, vertical] tuple
   */
  gutter?: ResponsiveSpacing | [ResponsiveSpacing, ResponsiveSpacing];

  /** Vertical alignment of grid items */
  align?: AlignItems;

  /** Horizontal distribution of grid items */
  justify?: JustifyContent;

  /** Full width without constraints */
  fluid?: boolean;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}

export interface GridItemProps {
  /** Grid item content */
  children?: React.ReactNode;

  /**
   * Number of columns to span (out of 24)
   * Can be responsive: { xs: 24, md: 12, lg: 8 }
   */
  span?: ResponsiveNumber;

  /**
   * Number of columns to offset
   * Can be responsive: { xs: 0, md: 2 }
   */
  offset?: ResponsiveNumber;

  /**
   * Order of the grid item
   * Can be responsive: { xs: 2, md: 1 }
   */
  order?: ResponsiveNumber;

  /** Flex property override */
  flex?: string | number;

  /** Responsive span shortcuts */
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  xxxl?: number;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}
