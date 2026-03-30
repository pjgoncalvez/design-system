import React from 'react';
import { IconProps } from '../types';

const SvgArrowRight: React.FC<IconProps> = ({
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
      d="m35.625 26-9.311 9.312 2.828 2.828 14.142-14.142L29.142 9.856l-2.828 2.828L35.63 22H5v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowRight.displayName = 'SvgArrowRight';

export default SvgArrowRight;
