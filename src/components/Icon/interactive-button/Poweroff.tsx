import React from 'react';
import { IconProps } from '../types';

const SvgPoweroff: React.FC<IconProps> = ({
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
      d="M22 27V5h4v22zm-5.498-15.994C12.012 13.602 9 18.45 9 24c0 8.284 6.716 15 15 15s15-6.716 15-15c0-5.55-3.013-10.398-7.501-12.994l2.003-3.463C39.175 10.825 43 16.965 43 24c0 10.493-8.507 19-19 19S5 34.493 5 24c0-7.035 3.825-13.175 9.499-16.457z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPoweroff.displayName = 'SvgPoweroff';

export default SvgPoweroff;
