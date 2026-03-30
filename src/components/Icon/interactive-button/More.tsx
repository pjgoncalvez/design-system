import React from 'react';
import { IconProps } from '../types';

const SvgMore: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M6 21v6h6v-6zm15 0v6h6v-6zm15 0v6h6v-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMore.displayName = 'SvgMore';

export default SvgMore;
