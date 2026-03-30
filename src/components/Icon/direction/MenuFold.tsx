import React from 'react';
import { IconProps } from '../types';

const SvgMenuFold: React.FC<IconProps> = ({
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
      d="M42 13H6V9h36zm0 13H22v-4h20zM6 39h36v-4H6zm8.116-21.001a1 1 0 0 1 1.543.84v9.911a1 1 0 0 1-1.543.84l-7.66-4.956a1 1 0 0 1 0-1.68z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMenuFold.displayName = 'SvgMenuFold';

export default SvgMenuFold;
