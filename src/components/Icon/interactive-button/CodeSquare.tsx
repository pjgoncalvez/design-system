import React from 'react';
import { IconProps } from '../types';

const SvgCodeSquare: React.FC<IconProps> = ({
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
      d="M6 7a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v34a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm4 1v32h28V8zm8.828 16.071 5.657-5.657-2.828-2.828-8.485 8.485 8.485 8.485 2.828-2.828zM26 31.455 30.14 16l3.864 1.035-4.14 15.455z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCodeSquare.displayName = 'SvgCodeSquare';

export default SvgCodeSquare;
