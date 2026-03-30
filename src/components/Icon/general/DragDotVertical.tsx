import React from 'react';
import { IconProps } from '../types';

const SvgDragDotVertical: React.FC<IconProps> = ({
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
      d="M15 6h6v6h-6zm12 0h6v6h-6zM15 21h6v6h-6zm12 0h6v6h-6zM15 36h6v6h-6zm12 0h6v6h-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDragDotVertical.displayName = 'SvgDragDotVertical';

export default SvgDragDotVertical;
