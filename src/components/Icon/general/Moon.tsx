import React from 'react';
import { IconProps } from '../types';

const SvgMoon: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M18.152 6.115c2.071-.66 3.6 1.379 3.057 3.086a14 14 0 0 0-.656 4.248c0 7.73 6.267 13.997 13.997 13.997 1.485 0 2.912-.23 4.249-.655 1.707-.544 3.745.985 3.086 3.057C39.458 37.473 32.32 43 23.885 43 13.456 43 5 34.545 5 24.114 5 15.68 10.527 8.542 18.152 6.115M16.71 11.07C12.112 13.603 9 18.497 9 24.114 9 32.335 15.665 39 23.886 39c5.617 0 10.511-3.112 13.045-7.71q-1.17.155-2.38.156c-9.94 0-17.998-8.057-17.998-17.997q.001-1.21.157-2.38"
      clipRule="evenodd"
    />
  </svg>
);

SvgMoon.displayName = 'SvgMoon';

export default SvgMoon;
