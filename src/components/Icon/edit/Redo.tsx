import React from 'react';
import { IconProps } from '../types';

const SvgRedo: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m34.092 6.81 9.192 9.192-9.192 9.193-2.829-2.829L35.63 18H18.5a9.5 9.5 0 0 0 0 19H31v4H18.5C11.044 41 5 34.956 5 27.5S11.044 14 18.5 14h17.125l-4.362-4.362z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRedo.displayName = 'SvgRedo';

export default SvgRedo;
