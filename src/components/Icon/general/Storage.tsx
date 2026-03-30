import React from 'react';
import { IconProps } from '../types';

const SvgStorage: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 4a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm31 24H9v-8h30zM9 40v-8h30v8zm30-24V8H9v8zM15.02 34H11v4.02h4.02zM11 10h4.02v4.02H11zm4.02 12H11v4.02h4.02z"
      clipRule="evenodd"
    />
  </svg>
);

SvgStorage.displayName = 'SvgStorage';

export default SvgStorage;
