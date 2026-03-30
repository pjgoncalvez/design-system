import React from 'react';
import { IconProps } from '../types';

const SvgLineHeight: React.FC<IconProps> = ({
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
      d="M44.446 15 39 5.469l-5.446 9.53H37v18h-3.446L39 42.532 44.446 33H41V15zM4 10h12.5v32h4V10H33V6H4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLineHeight.displayName = 'SvgLineHeight';

export default SvgLineHeight;
