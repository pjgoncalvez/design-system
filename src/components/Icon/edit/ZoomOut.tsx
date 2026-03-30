import React from 'react';
import { IconProps } from '../types';

const SvgZoomOut: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M22 9C14.82 9 9 14.82 9 22s5.82 13 13 13c3.59 0 6.838-1.453 9.192-3.808A12.95 12.95 0 0 0 35 22c0-7.18-5.82-13-13-13M5 22c0-9.389 7.611-17 17-17s17 7.611 17 17c0 3.973-1.365 7.63-3.648 10.523l7.562 7.563-2.828 2.828-7.562-7.562A16.93 16.93 0 0 1 22 39c-9.389 0-17-7.611-17-17m24 2H15v-4h14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgZoomOut.displayName = 'SvgZoomOut';

export default SvgZoomOut;
