import React from 'react';
import { IconProps } from '../types';

const SvgDoubleLeft: React.FC<IconProps> = ({
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
      d="m35.444 8.486 2.828 2.828-12.728 12.728L38.272 36.77l-2.828 2.828-15.557-15.556zm-11.314 0 2.828 2.828-12.727 12.728L26.958 36.77l-2.828 2.828L8.574 24.043z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDoubleLeft.displayName = 'SvgDoubleLeft';

export default SvgDoubleLeft;
