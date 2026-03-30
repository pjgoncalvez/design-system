import React from 'react';
import { IconProps } from '../types';

const SvgPaste: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M26.01 4H22v4.01h4.01zm8 0H30v4.01h4.01zm8 0H38v4.01h4.01zm0 7H38v4.01h4.01zm0 8H38v4.01h4.01zM9 12a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3zm1 28V16h20v24z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPaste.displayName = 'SvgPaste';

export default SvgPaste;
