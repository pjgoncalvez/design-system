/**
 * Icon Component Types
 *
 * Shared types for all icon components in the design system.
 */

import { SVGProps } from 'react';

/**
 * Supported icon sizes based on design system specifications
 */
export type IconSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 48;

/**
 * Props for icon components
 */
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /**
   * Size of the icon in pixels
   * @default 24
   */
  size?: IconSize;

  /**
   * Fill color for the icon
   * @default '#4E5969'
   */
  color?: string;

  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Type for icon component
 */
export type IconComponent = React.FC<IconProps>;
