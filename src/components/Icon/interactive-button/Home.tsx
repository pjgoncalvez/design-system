import React from 'react';
import { IconProps } from '../types';

const SvgHome: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m24 4.68 19 11.176V43H5V15.856zM22 39h4v-9h-4zm8 0V26H18v13H9V18.144L24 9.32l15 8.824V39z"
      clipRule="evenodd"
    />
  </svg>
);

SvgHome.displayName = 'SvgHome';

export default SvgHome;
