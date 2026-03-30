import React from 'react';
import { IconProps } from '../types';

const SvgDice: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8.498 5a3.5 3.5 0 0 0-3.5 3.5v31a3.5 3.5 0 0 0 3.5 3.5h31a3.5 3.5 0 0 0 3.5-3.5v-31a3.5 3.5 0 0 0-3.5-3.5zm.5 34V9h30v30zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m4 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-4 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m12-12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);

SvgDice.displayName = 'SvgDice';

export default SvgDice;
