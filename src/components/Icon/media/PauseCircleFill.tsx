import React from 'react';
import { IconProps } from '../types';

const SvgPauseCircleFill: React.FC<IconProps> = ({
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m18-7h-5v14h5zm9 0h-5v14h5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPauseCircleFill.displayName = 'SvgPauseCircleFill';

export default SvgPauseCircleFill;
