import React from 'react';
import { IconProps } from '../types';

const SvgUserAdd: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-9 5a9 9 0 1 1 18 0 9 9 0 0 1-18 0m2 15a8 8 0 0 0-8 8v2h16v4H5v-6c0-6.627 5.373-12 12-12h8v4zm17 4v-6h4v6h6v4h-6v6h-4v-6h-6v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUserAdd.displayName = 'SvgUserAdd';

export default SvgUserAdd;
