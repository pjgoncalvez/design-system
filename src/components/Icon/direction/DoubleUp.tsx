import React from 'react';
import { IconProps } from '../types';

const SvgDoubleUp: React.FC<IconProps> = ({
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
      d="m39.514 35.444-2.828 2.828-12.728-12.728L11.23 38.272l-2.828-2.828 15.556-15.557zm0-11.314-2.828 2.829L23.958 14.23 11.23 26.959 8.402 24.13 23.958 8.574z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDoubleUp.displayName = 'SvgDoubleUp';

export default SvgDoubleUp;
