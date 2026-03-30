import React from 'react';
import { IconProps } from '../types';

const SvgFullscreen: React.FC<IconProps> = ({
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
      d="M40 10h-7V6h8a3 3 0 0 1 3 3v8h-4zM15 6H7a3 3 0 0 0-3 3v8h4v-7h7zm29 33v-8h-4v7h-7v4h8a3 3 0 0 0 3-3M8 38v-7H4v8a3 3 0 0 0 3 3h8v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFullscreen.displayName = 'SvgFullscreen';

export default SvgFullscreen;
