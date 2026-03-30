import React from 'react';
import { IconProps } from '../types';

const SvgLeft: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m30.586 6.986 2.828 2.828-14.142 14.142 14.142 14.142-2.828 2.829L15.03 25.37l1.414-1.415-1.414 1.415-1.415-1.415z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLeft.displayName = 'SvgLeft';

export default SvgLeft;
