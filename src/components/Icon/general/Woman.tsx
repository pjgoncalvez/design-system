import React from 'react';
import { IconProps } from '../types';

const SvgWoman: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M15 18a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-13c-7.18 0-13 5.82-13 13 0 6.5 4.77 11.885 11 12.847V34h-7v4h7v6h4v-6h7v-4h-7v-3.153C32.23 29.885 37 24.5 37 18c0-7.18-5.82-13-13-13"
      clipRule="evenodd"
    />
  </svg>
);

SvgWoman.displayName = 'SvgWoman';

export default SvgWoman;
