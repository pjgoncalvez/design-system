import React from 'react';
import { IconProps } from '../types';

const SvgInfo: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    {...props}
  >
    <path fill={color} fillRule="evenodd" d="M27 13h-6V7h6zm-6 28h6V16h-6z" clipRule="evenodd" />
  </svg>
);

SvgInfo.displayName = 'SvgInfo';

export default SvgInfo;
