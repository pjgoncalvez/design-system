import React from 'react';
import { IconProps } from '../types';

const SvgSubscribed: React.FC<IconProps> = ({
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
      d="M11 8v30.667l13-6.934 13 6.934V8zM7 7a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v34.667c0 1.66-1.77 2.722-3.235 1.94L24 36.268l-13.765 7.34C8.77 44.39 7 43.328 7 41.668zm15.096 14.96 7.778-7.778 2.829 2.828-10.607 10.607-6.364-6.364 2.829-2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSubscribed.displayName = 'SvgSubscribed';

export default SvgSubscribed;
