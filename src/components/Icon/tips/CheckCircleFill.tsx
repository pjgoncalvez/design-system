import React from 'react';
import { IconProps } from '../types';

const SvgCheckCircleFill: React.FC<IconProps> = ({
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m18 7.828 12.914-12.914-2.828-2.828L22 26.172l-5.586-5.586-2.828 2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCheckCircleFill.displayName = 'SvgCheckCircleFill';

export default SvgCheckCircleFill;
