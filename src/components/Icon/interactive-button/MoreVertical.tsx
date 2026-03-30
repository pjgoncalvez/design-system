import React from 'react';
import { IconProps } from '../types';

const SvgMoreVertical: React.FC<IconProps> = ({
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
      d="M27 6h-6v6h6zm0 15h-6v6h6zm0 15h-6v6h6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMoreVertical.displayName = 'SvgMoreVertical';

export default SvgMoreVertical;
