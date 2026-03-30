import React from 'react';
import { IconProps } from '../types';

const SvgToRight: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M25 32.727V26H5v-4h20v-6.727c0-.87 1.034-1.325 1.676-.737l9.52 8.727a1 1 0 0 1 0 1.474l-9.52 8.727c-.642.588-1.676.133-1.676-.737M43 5h-4v38h4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgToRight.displayName = 'SvgToRight';

export default SvgToRight;
