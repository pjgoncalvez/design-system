import React from 'react';
import { IconProps } from '../types';

const SvgEmpty: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M22 11V5h4v6zm-7.586-4.414 4 4-2.828 2.828-4-4zm22 2.828-4 4-2.828-2.828 4-4zm-25.72 8.57A4 4 0 0 1 14.149 16H33.85a4 4 0 0 1 3.455 1.985l6.15 10.54A4 4 0 0 1 44 30.541V39a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-8.46a4 4 0 0 1 .545-2.015zM33.85 20H14.15l-4.667 8h11.96l.45 1.35.01.028q.025.062.09.196c.09.18.23.417.42.646.367.441.85.78 1.588.78s1.22-.339 1.589-.78a3.4 3.4 0 0 0 .518-.865l.001-.005.45-1.35h11.96zM40 32H29.227a7 7 0 0 1-.566.78C27.78 33.84 26.262 35 24 35s-3.78-1.161-4.661-2.22a7 7 0 0 1-.566-.78H8v7h32z"
      clipRule="evenodd"
    />
  </svg>
);

SvgEmpty.displayName = 'SvgEmpty';

export default SvgEmpty;
