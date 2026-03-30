import React from 'react';
import { IconProps } from '../types';

const SvgImageClose: React.FC<IconProps> = ({
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
      d="M5 9a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v19h-4V9H9v30h19v4H9a4 4 0 0 1-4-4zm8 4h6v6h-6zm22 8.172v6.656L27.828 35H12.172l9.328-9.328 4.5 4.5zM30.25 37.75a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m5.379 0-2.475-2.475 2.121-2.121 2.475 2.475 2.475-2.475 2.121 2.121-2.475 2.475 2.475 2.475-2.121 2.121-2.475-2.475-2.475 2.475-2.121-2.121z"
      clipRule="evenodd"
    />
  </svg>
);

SvgImageClose.displayName = 'SvgImageClose';

export default SvgImageClose;
