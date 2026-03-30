import React from 'react';
import { IconProps } from '../types';

const SvgArrowLeft: React.FC<IconProps> = ({
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
      d="m12.375 26 9.311 9.312-2.828 2.828L4.716 23.998 18.858 9.856l2.828 2.828L12.371 22H43v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowLeft.displayName = 'SvgArrowLeft';

export default SvgArrowLeft;
