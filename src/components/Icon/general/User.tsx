import React from 'react';
import { IconProps } from '../types';

const SvgUser: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M18 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 5 24 5m-8 22c-2.878 0-5.61.877-7.656 2.61C6.266 31.369 5 33.928 5 37v3a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3v-3c0-3.072-1.266-5.631-3.344-7.39C37.61 27.877 34.878 27 32 27zM9 37c0-1.898.75-3.34 1.928-4.337C12.14 31.638 13.908 31 16 31h16c2.092 0 3.861.638 5.072 1.663C38.25 33.66 39 35.102 39 37v2H9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUser.displayName = 'SvgUser';

export default SvgUser;
