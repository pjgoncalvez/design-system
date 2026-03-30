import React from 'react';
import { IconProps } from '../types';

const SvgPlus: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M22 22V5h4v17h17v4H26v17h-4V26H5v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlus.displayName = 'SvgPlus';

export default SvgPlus;
