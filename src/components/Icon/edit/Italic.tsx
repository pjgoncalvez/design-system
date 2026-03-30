import React from 'react';
import { IconProps } from '../types';

const SvgItalic: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24.59 10H18V6h17v4h-6.34l-5.25 28H30v4H13v-4h6.34z"
      clipRule="evenodd"
    />
  </svg>
);

SvgItalic.displayName = 'SvgItalic';

export default SvgItalic;
