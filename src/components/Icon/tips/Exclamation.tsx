import React from 'react';
import { IconProps } from '../types';

const SvgExclamation: React.FC<IconProps> = ({
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
    <path fill={color} fillRule="evenodd" d="M21 35h6v6h-6zm6-28h-6v25h6z" clipRule="evenodd" />
  </svg>
);

SvgExclamation.displayName = 'SvgExclamation';

export default SvgExclamation;
