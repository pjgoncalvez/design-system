import React from 'react';
import { IconProps } from '../types';

const SvgSortAscending: React.FC<IconProps> = ({
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
      d="M13 35.172V6h4v33.759c0 1.87-2.262 2.807-3.585 1.484l-6.83-6.829 2.83-2.828zM29.284 6h3.432l6.12 14.209-3.673 1.582L31 12.127l-4.163 9.664-3.674-1.582zm2.685 23H25v-4h12.4v3.294L30.431 38H38v4H25v-3.294z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSortAscending.displayName = 'SvgSortAscending';

export default SvgSortAscending;
