import React from 'react';
import { IconProps } from '../types';

const SvgUnlock: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M13 15c0-6.075 4.925-11 11-11s11 4.925 11 11h-4a7 7 0 1 0-14 0v4h23a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V22a3 3 0 0 1 3-3h5zm-4 8v16h30V23zm17 13V26h-4v10z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUnlock.displayName = 'SvgUnlock';

export default SvgUnlock;
