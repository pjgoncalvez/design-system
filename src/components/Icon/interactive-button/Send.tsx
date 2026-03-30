import React from 'react';
import { IconProps } from '../types';

const SvgSend: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 3.764 45.472 24 5 44.236V27.971L10.56 24 5 20.03zM14.64 26 9 30.03v7.734L32.528 26zm17.888-4H14.64L9 17.97v-7.734z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSend.displayName = 'SvgSend';

export default SvgSend;
