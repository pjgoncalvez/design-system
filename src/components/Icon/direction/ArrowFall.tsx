import React from 'react';
import { IconProps } from '../types';

const SvgArrowFall: React.FC<IconProps> = ({
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
      d="M20 4h8v24h5.979c1.704 0 2.635 1.988 1.544 3.297L25.544 43.27a2.01 2.01 0 0 1-3.088 0l-9.979-11.974c-1.09-1.31-.16-3.297 1.544-3.297H20z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowFall.displayName = 'SvgArrowFall';

export default SvgArrowFall;
