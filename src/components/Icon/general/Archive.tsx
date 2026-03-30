import React from 'react';
import { IconProps } from '../types';

const SvgArchive: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 9a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3v19a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V20a3 3 0 0 1-3-3zm7 11h26v18H11zm29-4H8v-6h32zM19 29h10v-4H19z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArchive.displayName = 'SvgArchive';

export default SvgArchive;
