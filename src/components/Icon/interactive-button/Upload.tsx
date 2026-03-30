import React from 'react';
import { IconProps } from '../types';

const SvgUpload: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m24.001 5.172 10.485 10.485-2.828 2.828-5.656-5.655v20.312h-4V12.827l-5.658 5.658-2.828-2.828zM10 39v-4H6v8h36v-8h-4v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUpload.displayName = 'SvgUpload';

export default SvgUpload;
