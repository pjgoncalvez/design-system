import React from 'react';
import { IconProps } from '../types';

const SvgArrowUp: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m26 12.375 9.312 9.311 2.828-2.828L23.998 4.716 9.856 18.858l2.828 2.828L22 12.371V43h4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowUp.displayName = 'SvgArrowUp';

export default SvgArrowUp;
