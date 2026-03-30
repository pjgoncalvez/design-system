import React from 'react';
import { IconProps } from '../types';

const SvgLoading: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16h4c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLoading.displayName = 'SvgLoading';

export default SvgLoading;
