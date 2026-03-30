import React from 'react';
import { IconProps } from '../types';

const SvgSync: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M13.396 13.39c2.237-2.236 5-3.617 7.889-4.146l-.72-3.934a18.92 18.92 0 0 0-9.997 5.252c-7.42 7.42-7.42 19.45 0 26.87l-3.414 3.415h9.657V31.19l-3.415 3.414c-5.858-5.858-5.858-15.355 0-21.213M40.85 7.153h-9.657v9.657l3.414-3.415c5.858 5.858 5.858 15.356 0 21.214a14.92 14.92 0 0 1-7.889 4.146l.721 3.935a18.92 18.92 0 0 0 9.996-5.253c7.42-7.42 7.42-19.45 0-26.87z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSync.displayName = 'SvgSync';

export default SvgSync;
