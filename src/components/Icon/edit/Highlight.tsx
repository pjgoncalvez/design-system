import React from 'react';
import { IconProps } from '../types';

const SvgHighlight: React.FC<IconProps> = ({
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
      d="m27 8.562-6 1.5V16h6zM31 16V7.28a3 3 0 0 0-3.728-2.91l-8 2A3 3 0 0 0 17 9.28V16h-2a3 3 0 0 0-3 3v6h-2a3 3 0 0 0-3 3v15h4V29h5v-9h16v9h5v14h4V28a3 3 0 0 0-3-3h-2v-6a3 3 0 0 0-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

SvgHighlight.displayName = 'SvgHighlight';

export default SvgHighlight;
