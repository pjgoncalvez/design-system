import React from 'react';
import { IconProps } from '../types';

const SvgH1: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 6H4v36h4V26h16v16h4V6h-4v16H8zm34 13h-3.472l-6.422 3.211 1.788 3.578L38 23.736V42h4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH1.displayName = 'SvgH1';

export default SvgH1;
