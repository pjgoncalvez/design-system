import React from 'react';
import { IconProps } from '../types';

const SvgPlusCircleFill: React.FC<IconProps> = ({
  size = 24,
  color = '#4E5969',
  className,
  ...props
}) => (
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m22-8v6h6l-.001 4H26v6h-4v-6h-6l.001-4H22v-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlusCircleFill.displayName = 'SvgPlusCircleFill';

export default SvgPlusCircleFill;
