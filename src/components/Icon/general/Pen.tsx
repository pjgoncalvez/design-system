import React from 'react';
import { IconProps } from '../types';

const SvgPen: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="m33.314 3.787 9.9 9.9L15.05 41.848h-9.9v-9.9zM9.15 33.607v4.242h4.243l19.213-19.213-4.243-4.242zm22.042-22.042 4.242 4.243 2.121-2.122-4.242-4.242z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPen.displayName = 'SvgPen';

export default SvgPen;
