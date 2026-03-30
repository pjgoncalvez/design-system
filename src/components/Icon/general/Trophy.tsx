import React from 'react';
import { IconProps } from '../types';

const SvgTrophy: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M11 5h26v2h6v9a8 8 0 0 1-6.12 7.778c-.778 5.683-5.228 10.196-10.88 11.07V39h10v4H12v-4h10v-4.153c-5.652-.873-10.102-5.386-10.88-11.069A8 8 0 0 1 5 16V7h6zm0 6H9v5c0 1.48.804 2.773 2 3.465zm26 8.465A4 4 0 0 0 39 16v-5h-2zM33 9H15v13a9 9 0 1 0 18 0z"
      clipRule="evenodd"
    />
  </svg>
);

SvgTrophy.displayName = 'SvgTrophy';

export default SvgTrophy;
