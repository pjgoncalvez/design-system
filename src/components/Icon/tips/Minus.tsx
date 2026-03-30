import React from 'react';
import { IconProps } from '../types';

const SvgMinus: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    {...props}
  >
    <path fill={color} fillRule="evenodd" d="M43 26H5v-4h38z" clipRule="evenodd" />
  </svg>
);

SvgMinus.displayName = 'SvgMinus';

export default SvgMinus;
