import React from 'react';
import { IconProps } from '../types';

const SvgQrcode: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 5h21v21H5zm4 4v13h13V9zm21-4h13v13H30zm4 4v5h5V9zm-22 3h7v7h-7zm25 10h6v4h-6zM5 30h13v13H5zm25-8h4v4h-4zM9 34v5h5v-5zm21-4h13v13H30zm4 4v5h5v-5zm-12 0v-4h4v4zm0 9v-6h4v6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgQrcode.displayName = 'SvgQrcode';

export default SvgQrcode;
