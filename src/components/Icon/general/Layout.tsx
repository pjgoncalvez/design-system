import React from 'react';
import { IconProps } from '../types';

const SvgLayout: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 42a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4zm0-32v28h9V10zm13 0v28h19V10z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLayout.displayName = 'SvgLayout';

export default SvgLayout;
