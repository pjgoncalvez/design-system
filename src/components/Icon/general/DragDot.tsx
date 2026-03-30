import React from 'react';
import { IconProps } from '../types';

const SvgDragDot: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M6 15h6v6H6zm15 0h6v6h-6zm15 0h6v6h-6zM6 27h6v6H6zm15 0h6v6h-6zm15 0h6v6h-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDragDot.displayName = 'SvgDragDot';

export default SvgDragDot;
