import React from 'react';
import { IconProps } from '../types';

const SvgArrowDown: React.FC<IconProps> = ({
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
      d="m26 35.625 9.312-9.311 2.828 2.828-14.142 14.142L9.856 29.142l2.828-2.828L22 35.63V5h4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowDown.displayName = 'SvgArrowDown';

export default SvgArrowDown;
