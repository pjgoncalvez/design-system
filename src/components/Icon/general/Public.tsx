import React from 'react';
import { IconProps } from '../types';

const SvgPublic: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8.189 21.536A16 16 0 0 0 8 24c0 6.084 3.395 11.374 8.394 14.08l1.493-10.431-3.994-4.394zm1.103-3.845 5.045 1.52 4.775-5.51-2.065-4.116a16.06 16.06 0 0 0-7.755 8.106M20.88 8.304l2.108 4.201a3 3 0 0 1-.415 3.31l-.841.971 7.948 4.968a3 3 0 0 1 .894 4.227l-9.336 13.781Q22.585 40 24 40c8.837 0 16-7.163 16-16S32.837 8 24 8c-1.068 0-2.111.105-3.12.304m.329 24.37 5.471-8.078-5.394-3.371-2.84 1.092 2.717 2.99a3 3 0 0 1 .75 2.442zM4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24"
      clipRule="evenodd"
    />
  </svg>
);

SvgPublic.displayName = 'SvgPublic';

export default SvgPublic;
