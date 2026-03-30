import React from 'react';
import { IconProps } from '../types';

const SvgThumbUp: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m34.338 39.414 5.727-18H27.893l2.407-6.29a4 4 0 0 0-1.362-4.65L27.19 9.187l-9.406 12.228H15.8v18zm3.59 1.91a3 3 0 0 1-2.86 2.09H11.8v-26h4.015L24.617 5.97a3 3 0 0 1 4.158-.586l2.536 1.87a8 8 0 0 1 2.725 9.298l-.33.86h6.359c2.707 0 4.632 2.634 3.812 5.214zM4.8 43.414v-26h4v26z"
      clipRule="evenodd"
    />
  </svg>
);

SvgThumbUp.displayName = 'SvgThumbUp';

export default SvgThumbUp;
