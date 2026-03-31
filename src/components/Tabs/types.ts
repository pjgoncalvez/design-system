/**
 * Tabs Component Types
 *
 * Types for the Tabs component based on design system specifications.
 */

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Tabs size options
 */
export type TabsSize = 'small' | 'medium' | 'large';

/**
 * Tabs variant options
 */
export type TabsVariant = 'line' | 'card' | 'pill';

/**
 * Tab item configuration
 */
export interface TabItem {
  /**
   * Unique key for the tab
   */
  key: string;

  /**
   * Label to display in the tab
   */
  label: ReactNode;

  /**
   * Content to display when tab is active
   */
  content: ReactNode;

  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Icon to display in the tab (optional)
   */
  icon?: ReactNode;
}

/**
 * Props for the Tabs component
 */
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of tab items
   */
  items: TabItem[];

  /**
   * Active tab key (controlled mode)
   */
  activeKey?: string;

  /**
   * Default active tab key (uncontrolled mode)
   */
  defaultActiveKey?: string;

  /**
   * Callback when active tab changes
   */
  onChange?: (activeKey: string) => void;

  /**
   * Size of the tabs
   * @default 'medium'
   */
  size?: TabsSize;

  /**
   * Visual variant of the tabs
   * @default 'line'
   */
  variant?: TabsVariant;

  /**
   * Whether tabs should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Additional CSS class name for tab list
   */
  tabListClassName?: string;

  /**
   * Additional CSS class name for tab content
   */
  contentClassName?: string;

  /**
   * Whether to animate tab changes
   * @default true
   */
  animated?: boolean;
}
