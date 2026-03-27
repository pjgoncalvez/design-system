/**
 * Flex Component Types
 */

import {
  FlexDirection,
  FlexWrap,
  AlignItems,
  JustifyContent,
  ResponsiveSpacing,
} from '../../types';

export interface FlexProps {
  /** Flex items */
  children: React.ReactNode;

  /** Flex direction */
  direction?: FlexDirection;

  /** Flex wrap behavior */
  wrap?: FlexWrap;

  /** Vertical alignment of items */
  align?: AlignItems;

  /** Horizontal distribution of items */
  justify?: JustifyContent;

  /** Gap between items */
  gap?: ResponsiveSpacing;

  /** Render as inline-flex instead of flex */
  inline?: boolean;

  /** Additional CSS class name */
  className?: string;

  /** Inline styles */
  style?: React.CSSProperties;

  /** Element type to render as */
  as?: React.ElementType;
}
