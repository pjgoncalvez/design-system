import React from 'react';
import { IconProps } from '../types';

const SvgEraser: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M25.379 6.793a3 3 0 0 1 4.242 0l14.086 14.086a3 3 0 0 1 0 4.242L30.326 38.502 44 38.5v4H14.913a3 3 0 0 1-2.12-.879l-9-9a3 3 0 0 1 0-4.242zm-.708 31.71 1.501-1.502L13.5 24.328 7.328 30.5l8 8zM16.328 21.5 29 34.172 40.172 23 27.5 10.328z"
      clipRule="evenodd"
    />
  </svg>
);

SvgEraser.displayName = 'SvgEraser';

export default SvgEraser;
