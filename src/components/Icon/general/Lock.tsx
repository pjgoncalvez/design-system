import React from 'react';
import { IconProps } from '../types';

const SvgLock: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M14 14.5c0-5.523 4.477-10 10-10s10 4.477 10 10v1h5a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-20a4 4 0 0 1 4-4h5zm4 1h12v-1a6 6 0 0 0-12 0zm-9 4v20h30v-20zm15 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6 2a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgLock.displayName = 'SvgLock';

export default SvgLock;
