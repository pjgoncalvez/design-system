import React from 'react';
import { IconProps } from '../types';

const SvgNav: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 7h40v34H4zm4 4v6h6v-6zm10 0v6h22v-6zm22 10H18v6h22zm0 10H18v6h22zm-26 6v-6H8v6zM8 27h6v-6H8z"
      clipRule="evenodd"
    />
  </svg>
);

SvgNav.displayName = 'SvgNav';

export default SvgNav;
