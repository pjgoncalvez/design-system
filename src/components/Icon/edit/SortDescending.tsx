import React from 'react';
import { IconProps } from '../types';

const SvgSortDescending: React.FC<IconProps> = ({
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
      d="M14.416 5.756c1.323-1.322 3.585-.385 3.585 1.485V42h-4V11.828l-3.587 3.586-2.828-2.828zM29.284 6h3.432l6.12 14.209-3.673 1.582L31 12.127l-4.163 9.664-3.674-1.582zm2.685 23H25v-4h12.4v3.294L30.431 38H38v4H25v-3.294z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSortDescending.displayName = 'SvgSortDescending';

export default SvgSortDescending;
