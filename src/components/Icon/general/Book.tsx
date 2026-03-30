import React from 'react';
import { IconProps } from '../types';

const SvgBook: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5.845 5.367a2 2 0 0 1 1.82-.253L24 10.879l16.334-5.765A2 2 0 0 1 43 7v28a2 2 0 0 1-1.334 1.886l-17 6a2 2 0 0 1-1.332 0l-17-6A2 2 0 0 1 5 35V7a2 2 0 0 1 .845-1.633M22 14.415 9 9.827v23.758l13 4.588zm4 23.758 13-4.588V9.827l-13 4.588zM12.673 13.617l7 2.5-1.346 3.767-7-2.5zm24 3.767-7 2.5-1.346-3.768 7-2.5zm-24 3.232 7 2.5-1.346 3.768-7-2.5zm24 3.768-7 2.5-1.346-3.768 7-2.5zm-24 3.232 7 2.5-1.346 3.767-7-2.5zm24 3.768-7 2.5-1.346-3.768 7-2.5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBook.displayName = 'SvgBook';

export default SvgBook;
