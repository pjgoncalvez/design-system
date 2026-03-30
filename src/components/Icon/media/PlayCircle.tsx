import React from 'react';
import { IconProps } from '../types';

const SvgPlayCircle: React.FC<IconProps> = ({
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
      d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16S8 32.837 8 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m-3.992 11.272A2 2 0 0 0 17 17v14a2 2 0 0 0 3.008 1.728l12-7a2 2 0 0 0 0-3.456zM27.03 24 21 27.518v-7.036z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlayCircle.displayName = 'SvgPlayCircle';

export default SvgPlayCircle;
