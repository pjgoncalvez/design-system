import React from 'react';
import { IconProps } from '../types';

const SvgRotateLeft: React.FC<IconProps> = ({
  size = 24,
  color = '#4E5969',
  className,
  ...props
}) => (
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
      d="M25 15.657a1 1 0 0 1-1.545.839l-7.165-4.657a1 1 0 0 1 0-1.677l7.165-4.658A1 1 0 0 1 25 6.343V9h9a8 8 0 0 1 8 8v6h-4v-6a4 4 0 0 0-4-4h-9zM8 22a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3zm4 1v14h18V23z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRotateLeft.displayName = 'SvgRotateLeft';

export default SvgRotateLeft;
