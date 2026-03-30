import React from 'react';
import { IconProps } from '../types';

const SvgH7: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 6h4v16h16V6h4v36h-4V26H8v16H4zm35.65 17H30v-4h14v3.27l-4.481 16.295-1.111 3.535-3.816-1.2 1.09-3.465z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH7.displayName = 'SvgH7';

export default SvgH7;
