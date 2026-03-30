import React from 'react';
import { IconProps } from '../types';

const SvgAt: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16c3.774 0 7.238-1.304 9.974-3.488l2.496 3.126A19.92 19.92 0 0 1 24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20a7.5 7.5 0 0 1-7.5 7.5c-2.31 0-4.208-1.306-5.451-2.862l-.017-.02A9 9 0 1 1 33 23c0 1.016.43 2.21 1.173 3.14.747.934 1.599 1.359 2.327 1.359A3.5 3.5 0 0 0 40 24c0-8.837-7.163-16-16-16m5 15a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgAt.displayName = 'SvgAt';

export default SvgAt;
