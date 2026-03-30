import React from 'react';
import { IconProps } from '../types';

const SvgCaretDown: React.FC<IconProps> = ({
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
      d="M24.937 34.829a1.2 1.2 0 0 1-1.874 0L9.56 17.949C8.93 17.165 9.49 16 10.497 16h27.006c1.007 0 1.566 1.164.937 1.95z"
    />
  </svg>
);

SvgCaretDown.displayName = 'SvgCaretDown';

export default SvgCaretDown;
