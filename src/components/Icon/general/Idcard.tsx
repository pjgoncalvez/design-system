import React from 'react';
import { IconProps } from '../types';

const SvgIdcard: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 10a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm36 0H8v28h32zm-20 9h-9v-4h9zm0 7h-9v-4h9zm-4 7h-5v-4h5zm13-5a5 5 0 0 0-5 5h-4a9 9 0 0 1 5.357-8.232 6 6 0 1 1 7.286 0A9 9 0 0 1 38 33h-4a5 5 0 0 0-5-5m-2-8a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgIdcard.displayName = 'SvgIdcard';

export default SvgIdcard;
