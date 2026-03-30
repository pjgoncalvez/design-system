import React from 'react';
import { IconProps } from '../types';

const SvgMusic: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m39 9.16-22 1.692v5.488l22-1.692zm0 9.5-22 1.692V37a6 6 0 1 1-4-5.659V9.926a3 3 0 0 1 2.77-2.991l24-1.846A3 3 0 0 1 43 8.079V37a6 6 0 1 1-4-5.658zM39 37a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-26 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgMusic.displayName = 'SvgMusic';

export default SvgMusic;
