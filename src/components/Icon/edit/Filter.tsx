import React from 'react';
import { IconProps } from '../types';

const SvgFilter: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 8a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v6.451a3 3 0 0 1-1.39 2.531L32 23.098V42h-4V22.549a3 3 0 0 1 1.39-2.531L39 13.902V9H9v4.902l9.61 6.116a3 3 0 0 1 1.39 2.53V37h-4V23.098l-9.61-6.116A3 3 0 0 1 5 14.452z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFilter.displayName = 'SvgFilter';

export default SvgFilter;
