import React from 'react';
import { IconProps } from '../types';

const SvgLoop: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M26 3v5.124C33.893 9.108 40 15.84 40 24c0 4.359-1.746 8.314-4.571 11.198l-2.858-2.8A11.96 11.96 0 0 0 36 24c0-5.946-4.325-10.882-10-11.834V17l-9.333-7zM15.429 15.602A11.96 11.96 0 0 0 12 24c0 5.946 4.325 10.882 10 11.834V30l9.333 7L22 44v-4.124C14.107 38.892 8 32.16 8 24c0-4.359 1.746-8.314 4.572-11.198z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLoop.displayName = 'SvgLoop';

export default SvgLoop;
