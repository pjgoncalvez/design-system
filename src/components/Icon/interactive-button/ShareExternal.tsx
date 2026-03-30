import React from 'react';
import { IconProps } from '../types';

const SvgShareExternal: React.FC<IconProps> = ({
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
      d="m24.004 3.172 9.778 9.778-2.828 2.828-4.95-4.95L26.003 28h-4V10.829l-4.949 4.95-2.828-2.83zM12 22h6v-4h-7a3 3 0 0 0-3 3v20a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-7v4h6v18H12z"
      clipRule="evenodd"
    />
  </svg>
);

SvgShareExternal.displayName = 'SvgShareExternal';

export default SvgShareExternal;
