import React from 'react';
import { IconProps } from '../types';

const SvgH3: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 6H4v36h4V26h16v16h4V6h-4v16H8zm28.445 12a6.444 6.444 0 0 0-6.444 6.444h4A2.444 2.444 0 0 1 36.445 22h.556a3 3 0 0 1 0 6h-2v4h2a3 3 0 0 1 0 6h-.556a2.444 2.444 0 0 1-2.444-2.444h-4A6.444 6.444 0 0 0 36.445 42h.556A7 7 0 0 0 41.9 30 7 7 0 0 0 37 18z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH3.displayName = 'SvgH3';

export default SvgH3;
