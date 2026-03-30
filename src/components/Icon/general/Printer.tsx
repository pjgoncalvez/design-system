import React from 'react';
import { IconProps } from '../types';

const SvgPrinter: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M12 8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v5h5a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3h-4v4a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3v-4H7a3 3 0 0 1-3-3V16a3 3 0 0 1 3-3h5zm4 5h16V9H16zm-5 19v-3a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v3h3V17H8v15zm4-2v9h18v-9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPrinter.displayName = 'SvgPrinter';

export default SvgPrinter;
