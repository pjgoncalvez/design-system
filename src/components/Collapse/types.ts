/**
 * Collapse Component Types
 *
 * Types for the Collapse component based on design system specifications.
 */

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Collapse size options
 */
export type CollapseSize = 'small' | 'medium' | 'large';

/**
 * Props for the Collapse component
 */
export interface CollapseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'onChange'> {
  /**
   * Content to display in the collapse header
   */
  header: ReactNode;

  /**
   * Content to display when expanded
   */
  children: ReactNode;

  /**
   * Whether the collapse is expanded (controlled mode)
   */
  expanded?: boolean;

  /**
   * Default expanded state (uncontrolled mode)
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * Whether the collapse is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Size of the collapse
   * @default 'medium'
   */
  size?: CollapseSize;

  /**
   * Whether to show the border
   * @default true
   */
  bordered?: boolean;

  /**
   * Callback when expand state changes
   */
  onChange?: (expanded: boolean) => void;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional CSS class name for header
   */
  headerClassName?: string;

  /**
   * Additional CSS class name for content
   */
  contentClassName?: string;
}
