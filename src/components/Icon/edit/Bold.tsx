import React from 'react';
import { IconProps } from '../types';

const SvgBold: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M11 8.2A2.2 2.2 0 0 1 13.2 6H25c5.523 0 10 4.477 10 10a9.96 9.96 0 0 1-2.51 6.626A10 10 0 0 1 39 32c0 5.523-4.477 10-10 10H13.2a2.2 2.2 0 0 1-2.2-2.2zM15 26v12h14a6 6 0 0 0 0-12zm0-4h10a6 6 0 0 0 0-12H15z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBold.displayName = 'SvgBold';

export default SvgBold;
