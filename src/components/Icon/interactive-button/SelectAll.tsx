import React from 'react';
import { IconProps } from '../types';

const SvgSelectAll: React.FC<IconProps> = ({
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
      d="m10.243 11.485 5.656-5.657 2.829 2.829-8.485 8.485-5.657-5.657 2.828-2.828zM43 13H21V9h22zM10.243 24.485l5.656-5.657 2.829 2.829-8.485 8.485-5.657-5.657 2.828-2.828zM43 27H21v-4h22zM10.243 37.485l5.656-5.657 2.829 2.829-8.485 8.485-5.657-5.657 2.828-2.828zM43 41H21v-4h22z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSelectAll.displayName = 'SvgSelectAll';

export default SvgSelectAll;
