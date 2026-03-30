import React from 'react';
import { IconProps } from '../types';

const SvgMobile: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M11 40V8h26v32zm-.125-36C8.615 4 7 5.914 7 8v32c0 2.086 1.615 4 3.875 4h26.25C39.385 44 41 42.086 41 40V8c0-2.086-1.615-4-3.875-4zM17 16h14v-4H17zm7 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);

SvgMobile.displayName = 'SvgMobile';

export default SvgMobile;
