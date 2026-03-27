/**
 * Inline Component Types
 */

import { ResponsiveSpacing, AlignItems, JustifyContent } from '../../types';

export interface InlineProps {
  /** Inline items */
  children: React.ReactNode;

  /** Spacing between items */
  spacing?: ResponsiveSpacing;

  /** Vertical alignment of items */
  align?: AlignItems;

  /** Horizontal distribution of items */
  justify?: JustifyContent;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}
