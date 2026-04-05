/**
 * Drawer Component Types
 *
 * Types for the Drawer component based on design system specifications.
 */

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Drawer placement options
 */
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

/**
 * Drawer size options
 */
export type DrawerSize = 'small' | 'medium' | 'large' | 'full';

/**
 * Props for the Drawer component
 */
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Whether the drawer is open
   */
  open: boolean;

  /**
   * Callback when the drawer requests to close
   */
  onClose: () => void;

  /**
   * Drawer title
   */
  title?: ReactNode;

  /**
   * Drawer content
   */
  children: ReactNode;

  /**
   * Placement of the drawer
   * @default 'right'
   */
  placement?: DrawerPlacement;

  /**
   * Size of the drawer
   * @default 'medium'
   */
  size?: DrawerSize;

  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Whether to show the overlay/backdrop
   * @default true
   */
  showOverlay?: boolean;

  /**
   * Whether clicking the overlay closes the drawer
   * @default true
   */
  closeOnOverlayClick?: boolean;

  /**
   * Whether pressing escape closes the drawer
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Custom footer content
   */
  footer?: ReactNode;

  /**
   * Additional CSS class name for the drawer container
   */
  className?: string;

  /**
   * Additional CSS class name for the header
   */
  headerClassName?: string;

  /**
   * Additional CSS class name for the body
   */
  bodyClassName?: string;

  /**
   * Additional CSS class name for the footer
   */
  footerClassName?: string;

  /**
   * Additional CSS class name for the overlay
   */
  overlayClassName?: string;

  /**
   * z-index for the drawer
   * @default 1000
   */
  zIndex?: number;

  /**
   * Whether to lock body scroll when drawer is open
   * @default true
   */
  lockBodyScroll?: boolean;
}
