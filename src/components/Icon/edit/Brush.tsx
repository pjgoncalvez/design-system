import React from 'react';
import { IconProps } from '../types';

const SvgBrush: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M9 9v8h22V9zM5 8c0-1.648 1.331-3 2.997-3H32.01C33.69 5 35 6.367 35 8v3h5a3 3 0 0 1 3 3v12.14a3 3 0 0 1-2.549 2.967L20 32.219V43h-4V31.36a3 3 0 0 1 2.549-2.966L39 25.28V15h-4v3.002A3 3 0 0 1 32 21H8a3 3 0 0 1-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBrush.displayName = 'SvgBrush';

export default SvgBrush;
