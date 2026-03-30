import React from 'react';
import { IconProps } from '../types';

const SvgPlusCircle: React.FC<IconProps> = ({
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m22-2v-6h-4v6h-5.999v4H22v6h4v-6h5.999v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlusCircle.displayName = 'SvgPlusCircle';

export default SvgPlusCircle;
