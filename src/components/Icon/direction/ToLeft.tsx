import React from 'react';
import { IconProps } from '../types';

const SvgToLeft: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M23 15.273V22h20v4H23v6.727c0 .87-1.035 1.325-1.676.737l-9.52-8.727a1 1 0 0 1 0-1.474l9.52-8.727c.641-.588 1.675-.133 1.675.737M9 5H5v38h4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgToLeft.displayName = 'SvgToLeft';

export default SvgToLeft;
