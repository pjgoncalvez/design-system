import React from 'react';
import { IconProps } from '../types';

const SvgPlayCircleFill: React.FC<IconProps> = ({
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
      d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m14.502-7.867a1 1 0 0 1 1.002.003l12 7a1 1 0 0 1 0 1.728l-12 7A1 1 0 0 1 18 31V17a1 1 0 0 1 .502-.867"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlayCircleFill.displayName = 'SvgPlayCircleFill';

export default SvgPlayCircleFill;
