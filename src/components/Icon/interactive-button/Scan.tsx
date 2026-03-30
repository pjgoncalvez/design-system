import React from 'react';
import { IconProps } from '../types';

const SvgScan: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 5h12v4H9v8H5zm34 4h-8V5h12v12h-4zm4 17H5v-4h38zM9 39v-8H5v12h12v-4zm30 0v-8h4v12H31v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgScan.displayName = 'SvgScan';

export default SvgScan;
