import React from 'react';
import { IconProps } from '../types';

const SvgCircular: React.FC<IconProps> = ({
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
      d="M24 19a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
      clipRule="evenodd"
    />
  </svg>
);

SvgCircular.displayName = 'SvgCircular';

export default SvgCircular;
