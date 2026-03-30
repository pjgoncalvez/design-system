import React from 'react';
import { IconProps } from '../types';

const SvgCode: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M18.979 41.386 25.23 5.933l3.94.694-6.252 35.453zM8.249 24l9.899-9.9-2.828-2.828L2.592 24 15.32 36.728l2.828-2.829zm24.42-12.728L45.397 24 32.67 36.728l-2.828-2.829 9.9-9.9-9.9-9.899z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCode.displayName = 'SvgCode';

export default SvgCode;
