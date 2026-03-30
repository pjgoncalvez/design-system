import React from 'react';
import { IconProps } from '../types';

const SvgShrink: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M26 19V4h4v14h14v4H28.996A2.996 2.996 0 0 1 26 19M4 26h15.004A2.996 2.996 0 0 1 22 29v15h-4V30H4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgShrink.displayName = 'SvgShrink';

export default SvgShrink;
