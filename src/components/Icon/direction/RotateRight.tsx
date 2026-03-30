import React from 'react';
import { IconProps } from '../types';

const SvgRotateRight: React.FC<IconProps> = ({
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
      d="M23 15.657a1 1 0 0 0 1.545.839l7.165-4.657a1 1 0 0 0 0-1.677l-7.165-4.658A1 1 0 0 0 23 6.343V9h-9a8 8 0 0 0-8 8v6h4v-6a4 4 0 0 1 4-4h9zM40 22a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3zm-4 1v14H18V23z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRotateRight.displayName = 'SvgRotateRight';

export default SvgRotateRight;
