import React from 'react';
import { IconProps } from '../types';

const SvgSkipNextFill: React.FC<IconProps> = ({
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
      d="M12 12.956a1 1 0 0 1 1.585-.81l15.293 11.043a1 1 0 0 1 0 1.622L13.586 35.855a1 1 0 0 1-1.586-.81zM32 35a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSkipNextFill.displayName = 'SvgSkipNextFill';

export default SvgSkipNextFill;
