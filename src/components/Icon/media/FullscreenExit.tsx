import React from 'react';
import { IconProps } from '../types';

const SvgFullscreenExit: React.FC<IconProps> = ({
  size = 24,
  color = '#4E5969',
  className,
  ...props
}) => (
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
      d="M37 13V6h-4v8a3 3 0 0 0 3 3h8v-4zm-22 1V6h-4v7H4v4h8a3 3 0 0 0 3-3m29 17h-8a3 3 0 0 0-3 3v8h4v-7h7zm-33 4H4v-4h8a3 3 0 0 1 3 3v8h-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFullscreenExit.displayName = 'SvgFullscreenExit';

export default SvgFullscreenExit;
