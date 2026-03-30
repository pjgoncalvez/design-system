import React from 'react';
import { IconProps } from '../types';

const SvgRight: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m17.414 40.927-2.828-2.828 14.142-14.143L14.586 9.814l2.828-2.828L32.97 22.542l-1.414 1.414 1.414-1.414 1.415 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRight.displayName = 'SvgRight';

export default SvgRight;
