import React from 'react';
import { IconProps } from '../types';

const SvgCompass: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m23.645-3.629-4.964 2.317-2.316 4.963 4.964-2.316zm2.794-5.718c1.862-.869 3.793 1.062 2.924 2.924l-5.025 10.767-10.767 5.025c-1.862.869-3.793-1.062-2.924-2.924l5.025-10.767z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCompass.displayName = 'SvgCompass';

export default SvgCompass;
