import React from 'react';
import { IconProps } from '../types';

const SvgExpand: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M26 5h14.004A2.996 2.996 0 0 1 43 8v14h-4V9H26zM5 40V26h4v13h13v4H7.996A2.997 2.997 0 0 1 5 40"
      clipRule="evenodd"
    />
  </svg>
);

SvgExpand.displayName = 'SvgExpand';

export default SvgExpand;
