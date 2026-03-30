import React from 'react';
import { IconProps } from '../types';

const SvgInfoCircleFill: React.FC<IconProps> = ({
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m22-6v-4h-4v4zm-4 2v14h4V20z"
      clipRule="evenodd"
    />
  </svg>
);

SvgInfoCircleFill.displayName = 'SvgInfoCircleFill';

export default SvgInfoCircleFill;
