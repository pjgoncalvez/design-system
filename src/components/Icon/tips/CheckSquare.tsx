import React from 'react';
import { IconProps } from '../types';

const SvgCheckSquare: React.FC<IconProps> = ({
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
      d="M5 8a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v32a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm4 1v30h30V9zm12.168 18.278 12.021-12.02 2.828 2.828-14.849 14.849-9.192-9.192 2.828-2.829z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCheckSquare.displayName = 'SvgCheckSquare';

export default SvgCheckSquare;
