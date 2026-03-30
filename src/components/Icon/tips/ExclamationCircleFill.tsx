import React from 'react';
import { IconProps } from '../types';

const SvgExclamationCircleFill: React.FC<IconProps> = ({
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m18 6v4h4v-4zm4-2V14h-4v14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgExclamationCircleFill.displayName = 'SvgExclamationCircleFill';

export default SvgExclamationCircleFill;
