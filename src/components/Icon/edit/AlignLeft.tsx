import React from 'react';
import { IconProps } from '../types';

const SvgAlignLeft: React.FC<IconProps> = ({
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
      d="M4 7h40v4H4zm0 10h21v4H4zm0 10h36v4H4zm0 10h21v4H4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgAlignLeft.displayName = 'SvgAlignLeft';

export default SvgAlignLeft;
