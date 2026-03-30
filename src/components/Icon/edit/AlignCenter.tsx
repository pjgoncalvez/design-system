import React from 'react';
import { IconProps } from '../types';

const SvgAlignCenter: React.FC<IconProps> = ({
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
      d="M4 7h40v4H4zm10 10h20v4H14zM6 27h36v4H6zm8 10h20v4H14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgAlignCenter.displayName = 'SvgAlignCenter';

export default SvgAlignCenter;
