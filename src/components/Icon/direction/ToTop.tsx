import React from 'react';
import { IconProps } from '../types';

const SvgToTop: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M32.727 23H26v20h-4V23h-6.727c-.87 0-1.325-1.034-.737-1.676l8.727-9.52a1 1 0 0 1 1.474 0l8.727 9.52c.588.642.133 1.676-.737 1.676M43 9V5H5v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgToTop.displayName = 'SvgToTop';

export default SvgToTop;
