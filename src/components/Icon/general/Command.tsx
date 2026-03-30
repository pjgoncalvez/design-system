import React from 'react';
import { IconProps } from '../types';

const SvgCommand: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 13a8 8 0 1 1 16 0v4h6v-4a8 8 0 1 1 8 8h-4v6h4a8 8 0 1 1-8 8v-4h-6v4a8 8 0 1 1-8-8h4v-6h-4a8 8 0 0 1-8-8m12 4v-4a4 4 0 1 0-4 4zm4 4v6h6v-6zm-4 10h-4a4 4 0 1 0 4 4zm14 0v4a4 4 0 1 0 4-4zm0-14h4a4 4 0 1 0-4-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCommand.displayName = 'SvgCommand';

export default SvgCommand;
