/**
 * Stack Component Types
 */

import { ResponsiveSpacing, AlignItems, JustifyContent } from '../../types';

export interface StackProps {
  /** Stack items */
  children: React.ReactNode;

  /** Stack direction */
  direction?: 'vertical' | 'horizontal';

  /** Spacing between items */
  spacing?: ResponsiveSpacing;

  /** Vertical alignment of items */
  align?: AlignItems;

  /** Horizontal distribution of items */
  justify?: JustifyContent;

  /** Allow items to wrap */
  wrap?: boolean;

  /** Divider to render between items */
  divider?: React.ReactNode;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}
