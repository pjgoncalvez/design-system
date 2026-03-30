import React from 'react';
import { IconProps } from '../types';

const SvgCamera: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M15.073 7.382A2.5 2.5 0 0 1 17.309 6h13.382a2.5 2.5 0 0 1 2.236 1.382L34.237 10H41a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h6.764zM8 14v24h32V14zm16 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-9 5a9 9 0 1 1 18 0 9 9 0 0 1-18 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgCamera.displayName = 'SvgCamera';

export default SvgCamera;
