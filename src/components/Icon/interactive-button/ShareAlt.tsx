import React from 'react';
import { IconProps } from '../types';

const SvgShareAlt: React.FC<IconProps> = ({
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
      d="M11.5 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M5 11.5a6.5 6.5 0 1 1 12.94.873l13.85 6.648a6.5 6.5 0 1 1 .146 9.107l-14.03 7.296C18.501 39.163 15.635 43 11.5 43a6.5 6.5 0 1 1 4.564-11.128L30.09 24.58a6.5 6.5 0 0 1-.032-1.952L16.21 15.979A6.5 6.5 0 0 1 5 11.5M36.5 21a2.5 2.5 0 1 0-.002 5.001 2.5 2.5 0 0 0 .002-5m-25 13a2.5 2.5 0 0 0 0 5c1.812 0 3.046-2.067 2.22-3.652A2.5 2.5 0 0 0 11.5 34"
      clipRule="evenodd"
    />
  </svg>
);

SvgShareAlt.displayName = 'SvgShareAlt';

export default SvgShareAlt;
