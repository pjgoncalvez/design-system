import React from 'react';
import { IconProps } from '../types';

const SvgObliqueLine: React.FC<IconProps> = ({
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
      d="M16.586 40.898 27.599 5.902l3.815 1.2-11.013 34.996z"
      clipRule="evenodd"
    />
  </svg>
);

SvgObliqueLine.displayName = 'SvgObliqueLine';

export default SvgObliqueLine;
