import React from 'react';
import { IconProps } from '../types';

const SvgBug: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 9a5 5 0 0 0-5 5h-4a9 9 0 1 1 18 0h-4a5 5 0 0 0-5-5M9 14a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2h4a6 6 0 0 1-6 6v5h6v4h-6v2q-.001 1.187-.205 2.313A8.504 8.504 0 0 1 43 41.5v.5h-4v-.5a4.5 4.5 0 0 0-3.52-4.393A13 13 0 0 1 24 44a13 13 0 0 1-11.48-6.893A4.5 4.5 0 0 0 9 41.5v.5H5v-.5c0-3.9 2.626-7.185 6.205-8.187A13 13 0 0 1 11 31v-2H5v-4h6v-5a6 6 0 0 1-6-6zm6 6v11a9 9 0 0 0 7 8.777V23h4v16.777c4.008-.91 7-4.494 7-8.777V20z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBug.displayName = 'SvgBug';

export default SvgBug;
