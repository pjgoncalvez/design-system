import React from 'react';
import { IconProps } from '../types';

const SvgSearch: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M31.657 11.858c-5.468-5.468-14.332-5.468-19.8 0-5.467 5.467-5.467 14.331 0 19.799 5.468 5.467 14.332 5.467 19.8 0 5.467-5.468 5.467-14.332 0-19.8M9.029 9.029C16.06 2 27.456 2 34.485 9.03c6.551 6.552 6.997 16.897 1.337 23.964l7.148 7.15-2.828 2.828-7.149-7.15c-7.067 5.661-17.412 5.216-23.964-1.336C2 27.455 2 16.06 9.03 9.03"
      clipRule="evenodd"
    />
  </svg>
);

SvgSearch.displayName = 'SvgSearch';

export default SvgSearch;
