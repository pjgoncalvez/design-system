import React from 'react';
import { IconProps } from '../types';

const SvgCaretUp: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M23.063 13.171a1.2 1.2 0 0 1 1.874 0l13.503 16.88c.629.785.07 1.949-.937 1.949H10.497c-1.006 0-1.566-1.164-.937-1.95z"
    />
  </svg>
);

SvgCaretUp.displayName = 'SvgCaretUp';

export default SvgCaretUp;
