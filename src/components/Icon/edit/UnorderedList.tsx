import React from 'react';
import { IconProps } from '../types';

const SvgUnorderedList: React.FC<IconProps> = ({
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
      d="M9 13H5V9h4zm34 0H13V9h30zM9 26H5v-4h4zm34 0H13v-4h30zM9 39H5v-4h4zm34 0H13v-4h30z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUnorderedList.displayName = 'SvgUnorderedList';

export default SvgUnorderedList;
