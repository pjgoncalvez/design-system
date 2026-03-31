/**
 * Badge Component Types
 *
 * Types for the Badge component based on design system specifications.
 */

import { ReactNode } from 'react';

/**
 * Badge color variants based on semantic design tokens
 */
export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'default';

/**
 * Badge size options
 */
export type BadgeSize = 'small' | 'medium' | 'large';

/**
 * Props for the Badge component
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Content to display inside the badge
   */
  children?: ReactNode;

  /**
   * Visual variant of the badge
   * @default 'default'
   */
  variant?: BadgeVariant;

  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: BadgeSize;

  /**
   * Whether to show the badge as a dot (without text)
   * @default false
   */
  dot?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;
}
