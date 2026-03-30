import React from 'react';
import { IconProps } from '../types';

const SvgDownCircle: React.FC<IconProps> = ({
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
      d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-9.9-22.071 9.9 9.9 9.899-9.9L31.07 19.1 24 26.17l-7.072-7.07z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDownCircle.displayName = 'SvgDownCircle';

export default SvgDownCircle;
