/**
 * Icon Wrapper Component
 *
 * Base component for rendering SVG icons with consistent sizing.
 * Supports 10 size variants from 10px to 48px based on design system specifications.
 */

import React from 'react';

export type IconSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 32 | 48;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Size of the icon in pixels
   * @default 24
   */
  size?: IconSize;
  /**
   * Icon color
   * @default '#4E5969'
   */
  color?: string;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * SVG path content
   */
  children?: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({
  size = 24,
  color = '#4E5969',
  className,
  children,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childProps = child.props as React.SVGProps<SVGPathElement>;
          return React.cloneElement(child as React.ReactElement<React.SVGProps<SVGPathElement>>, {
            fill: childProps.fill || color,
            fillRule: childProps.fillRule || 'evenodd',
            clipRule: childProps.clipRule || 'evenodd',
          });
        }
        return child;
      })}
    </svg>
  );
};

Icon.displayName = 'Icon';
