import React from 'react';
import { IconProps } from '../types';

const SvgPlayArrow: React.FC<IconProps> = ({
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
      d="M13 10.622v26.755l21.246-13.383zM9 8.811c0-2.36 2.6-3.796 4.598-2.539l24.123 15.183c1.87 1.176 1.87 3.9.001 5.077L13.599 41.727C11.6 42.985 9 41.549 9 39.188z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPlayArrow.displayName = 'SvgPlayArrow';

export default SvgPlayArrow;
