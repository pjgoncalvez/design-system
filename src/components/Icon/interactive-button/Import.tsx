import React from 'react';
import { IconProps } from '../types';

const SvgImport: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 5h26v4H9v30h22v4H5zm18.685 21 5.658 5.658-2.828 2.828-10.486-10.485 10.486-10.485 2.828 2.828L23.687 22H43v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgImport.displayName = 'SvgImport';

export default SvgImport;
