import React from 'react';
import { IconProps } from '../types';

const SvgDown: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m41.014 18.858-2.828-2.829-14.142 14.143L9.9 16.029l-2.828 2.829 15.556 15.556L24.044 33l-1.415 1.414 1.415 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDown.displayName = 'SvgDown';

export default SvgDown;
