import React from 'react';
import { IconProps } from '../types';

const SvgDragArrow: React.FC<IconProps> = ({
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
      d="m24 3.172 7.414 7.414-2.828 2.828L26 10.83V22h11.172l-2.586-2.586 2.828-2.828L44.828 24l-7.414 7.414-2.828-2.828L37.172 26H26v11.172l2.586-2.586 2.828 2.828L24 44.828l-7.414-7.414 2.828-2.828L22 37.172V26H10.828l2.586 2.586-2.828 2.828L3.172 24l7.414-7.414 2.828 2.828L10.828 22H22V10.83l-2.586 2.585-2.828-2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDragArrow.displayName = 'SvgDragArrow';

export default SvgDragArrow;
