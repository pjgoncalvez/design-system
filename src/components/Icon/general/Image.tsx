import React from 'react';
import { IconProps } from '../types';

const SvgImage: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M9 5a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm0 4h30v30H9zm10 4h-6v6h6zm16 22V19.172L24.188 29.984 20.5 25.242 12.91 35z"
      clipRule="evenodd"
    />
  </svg>
);

SvgImage.displayName = 'SvgImage';

export default SvgImage;
