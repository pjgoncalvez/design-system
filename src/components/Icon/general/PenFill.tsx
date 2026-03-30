import React from 'react';
import { IconProps } from '../types';

const SvgPenFill: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M33.9 5.615a2 2 0 0 1 2.828 0l5.657 5.657a2 2 0 0 1 0 2.828l-1.414 1.415-8.486-8.486zM31.07 8.444l8.485 8.485L19.05 37.435l-8.485-8.485zm-21.92 21.92 8.485 8.485-10.83 3.61a1 1 0 0 1-1.265-1.265z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPenFill.displayName = 'SvgPenFill';

export default SvgPenFill;
