import React from 'react';
import { IconProps } from '../types';

const SvgLaunch: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M43 5H28v4h8.17L19.408 25.764l2.828 2.828L39 11.827V20h4zM22 9H9v30h30V26h4v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLaunch.displayName = 'SvgLaunch';

export default SvgLaunch;
