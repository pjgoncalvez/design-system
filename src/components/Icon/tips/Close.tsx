import React from 'react';
import { IconProps } from '../types';

const SvgClose: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M21.172 24 8.444 11.272l2.828-2.828L24 21.172 36.728 8.444l2.828 2.828L26.828 24l12.728 12.728-2.828 2.828L24 26.83 11.272 39.557l-2.828-2.829z"
      clipRule="evenodd"
    />
  </svg>
);

SvgClose.displayName = 'SvgClose';

export default SvgClose;
