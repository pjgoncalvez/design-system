import React from 'react';
import { IconProps } from '../types';

const SvgLeftCircle: React.FC<IconProps> = ({
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
      d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16S8 32.837 8 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m5.9 27.071L22.828 24l7.072-7.071L27.07 14.1 17.171 24l9.9 9.9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLeftCircle.displayName = 'SvgLeftCircle';

export default SvgLeftCircle;
