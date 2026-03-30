import React from 'react';
import { IconProps } from '../types';

const SvgSwap: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m42.707 13.879-8.293-8.293-2.828 2.828L38.172 15H5v4h35.586c2.672 0 4.011-3.232 2.121-5.121M5.293 34.12l8.293 8.293 2.828-2.828L9.828 33H43v-4H7.414c-2.672 0-4.011 3.231-2.121 5.121"
      clipRule="evenodd"
    />
  </svg>
);

SvgSwap.displayName = 'SvgSwap';

export default SvgSwap;
