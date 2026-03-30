import React from 'react';
import { IconProps } from '../types';

const SvgSun: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M21 5h6v6h-6zm3 14a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-9 5a9 9 0 1 1 18 0 9 9 0 0 1-18 0m12 19v-6h-6v6zm16-16h-6v-6h6zm-32 0v-6H5v6zm28.556 8.314-4.242 4.242-4.243-4.242 4.243-4.243zm-26.87-18.385 4.243-4.243-4.243-4.242-4.242 4.242zm0 22.627-4.242-4.242 4.243-4.243 4.243 4.243zm18.386-26.87 4.242 4.243 4.243-4.243-4.243-4.242z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSun.displayName = 'SvgSun';

export default SvgSun;
