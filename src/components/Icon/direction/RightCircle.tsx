import React from 'react';
import { IconProps } from '../types';

const SvgRightCircle: React.FC<IconProps> = ({
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
      d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16S8 32.837 8 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m-5.929 12.929L25.142 24l-7.07 7.071L20.9 33.9l9.899-9.9-9.9-9.9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRightCircle.displayName = 'SvgRightCircle';

export default SvgRightCircle;
