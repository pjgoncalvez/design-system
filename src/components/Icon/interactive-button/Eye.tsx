import React from 'react';
import { IconProps } from '../types';

const SvgEye: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4.3 22.946C9.83 14.028 16.36 9 24 9s14.171 5.028 19.7 13.946L44.353 24l-.653 1.054C38.17 33.972 31.64 39 24 39S9.829 33.972 4.3 25.054L3.647 24zM8.37 24C13.385 31.666 18.626 35 24 35s10.615-3.334 15.63-11C34.614 16.334 29.374 13 24 13S13.384 16.334 8.37 24M24 21a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-7 3a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgEye.displayName = 'SvgEye';

export default SvgEye;
