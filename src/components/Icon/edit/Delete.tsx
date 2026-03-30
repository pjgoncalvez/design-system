import React from 'react';
import { IconProps } from '../types';

const SvgDelete: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M34 9V5H14v4H5v4h3.5v27a3 3 0 0 0 3 3h25a3 3 0 0 0 3-3V13H43V9zM12.5 39V13h23v26zM18 18v15h4V18zm8 0v15h4V18z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDelete.displayName = 'SvgDelete';

export default SvgDelete;
