import React from 'react';
import { IconProps } from '../types';

const SvgArrowRise: React.FC<IconProps> = ({
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
      d="M28 44h-8V20h-5.979c-1.704 0-2.635-1.988-1.544-3.297L22.456 4.73a2.01 2.01 0 0 1 3.088 0l9.979 11.974c1.09 1.31.16 3.297-1.544 3.297H28z"
      clipRule="evenodd"
    />
  </svg>
);

SvgArrowRise.displayName = 'SvgArrowRise';

export default SvgArrowRise;
