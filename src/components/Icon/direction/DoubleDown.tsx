import React from 'react';
import { IconProps } from '../types';

const SvgDoubleDown: React.FC<IconProps> = ({
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
      d="m8.486 12.556 2.828-2.828 12.728 12.728L36.77 9.728l2.828 2.828-15.556 15.557zm0 11.314 2.828-2.829L24.042 33.77 36.77 21.042l2.828 2.828-15.556 15.556z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDoubleDown.displayName = 'SvgDoubleDown';

export default SvgDoubleDown;
