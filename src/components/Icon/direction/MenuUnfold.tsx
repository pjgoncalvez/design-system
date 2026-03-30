import React from 'react';
import { IconProps } from '../types';

const SvgMenuUnfold: React.FC<IconProps> = ({
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
      d="M6 13h36V9H6zm16 13h20v-4H22zm20 13H6v-4h36zM6 19.044a1 1 0 0 1 1.543-.84l7.66 4.956a1 1 0 0 1 0 1.68l-7.66 4.956A1 1 0 0 1 6 28.956z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMenuUnfold.displayName = 'SvgMenuUnfold';

export default SvgMenuUnfold;
