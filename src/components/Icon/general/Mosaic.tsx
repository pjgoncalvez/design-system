import React from 'react';
import { IconProps } from '../types';

const SvgMosaic: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 5h8v8H4zm16 8v8h-8v-8zm-8 16H4v-8h8zm8 0h-8v7H4v8h8v-7h8v7h8v-7h8v7h8v-8h-8v-7h8v-8h-8v-8h8V5h-8v8h-8V5h-8v8h8v8h-8zm8 0h-8v7h8zm0-8v8h8v-8z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMosaic.displayName = 'SvgMosaic';

export default SvgMosaic;
