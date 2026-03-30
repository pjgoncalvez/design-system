import React from 'react';
import { IconProps } from '../types';

const SvgExport: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 5h26v4H9v30h22v4H5zm28.343 8.516L43.828 24 33.343 34.486l-2.829-2.828L36.172 26H16.857v-4H36.17l-5.656-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

SvgExport.displayName = 'SvgExport';

export default SvgExport;
