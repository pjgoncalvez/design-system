import React from 'react';
import { IconProps } from '../types';

const SvgDesktop: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 9a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H26v4h7v4H15v-4h7v-4H7a3 3 0 0 1-3-3zm4 1v20h32V10z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDesktop.displayName = 'SvgDesktop';

export default SvgDesktop;
