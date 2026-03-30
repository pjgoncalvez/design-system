import React from 'react';
import { IconProps } from '../types';

const SvgCopy: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M38 8H20V4h18a4 4 0 0 1 4 4v22h-4zM6 16a4 4 0 0 1 4-4h20c2.205 0 4 1.783 4 3.997v24.011A3.99 3.99 0 0 1 30.003 44H9.996A3.996 3.996 0 0 1 6 40zm24 0H10v24h20z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCopy.displayName = 'SvgCopy';

export default SvgCopy;
