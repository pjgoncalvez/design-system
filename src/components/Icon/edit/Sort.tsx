import React from 'react';
import { IconProps } from '../types';

const SvgSort: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 7h38v4H5zm0 15h29.5v4H5zm0 15h14v4H5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSort.displayName = 'SvgSort';

export default SvgSort;
