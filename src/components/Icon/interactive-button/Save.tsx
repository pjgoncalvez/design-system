import React from 'react';
import { IconProps } from '../types';

const SvgSave: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M10 8v32h28V15.76L31.102 8H30v13a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V8zM9 4a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V15.38a3 3 0 0 0-.758-1.993l-7.449-8.38A3 3 0 0 0 31.551 4zm7 4v12h3v-7h4v7h3V8z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSave.displayName = 'SvgSave';

export default SvgSave;
