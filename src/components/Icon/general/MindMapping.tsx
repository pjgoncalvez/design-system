import React from 'react';
import { IconProps } from '../types';

const SvgMindMapping: React.FC<IconProps> = ({
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
      d="M5 10a4 4 0 1 1 6 3.465V22h5v4h-5v10h5v4H7V13.465A4 4 0 0 1 5 10m38 2H20V8h23zm0 14H20v-4h23zm0 14H20v-4h23z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMindMapping.displayName = 'SvgMindMapping';

export default SvgMindMapping;
