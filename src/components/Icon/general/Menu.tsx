import React from 'react';
import { IconProps } from '../types';

const SvgMenu: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M43 12H5V8h38zm0 14H5v-4h38zm0 14H5v-4h38z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMenu.displayName = 'SvgMenu';

export default SvgMenu;
