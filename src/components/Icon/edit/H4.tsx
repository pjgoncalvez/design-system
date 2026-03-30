import React from 'react';
import { IconProps } from '../types';

const SvgH4: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 6h4v16h16V6h4v36h-4V26H8v16H4zm33.8 12h4.7v16H44v4h-1.5v4h-4v-4H29v-3.5zm.7 16v-8.812L33.8 34z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH4.displayName = 'SvgH4';

export default SvgH4;
