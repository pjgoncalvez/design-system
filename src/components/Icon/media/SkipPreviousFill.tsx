import React from 'react';
import { IconProps } from '../types';

const SvgSkipPreviousFill: React.FC<IconProps> = ({
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
      d="M36 35.044a1 1 0 0 1-1.586.81L19.122 24.812a1 1 0 0 1 0-1.622l15.292-11.044a1 1 0 0 1 1.586.81zM16 13a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSkipPreviousFill.displayName = 'SvgSkipPreviousFill';

export default SvgSkipPreviousFill;
