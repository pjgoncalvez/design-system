import React from 'react';
import { IconProps } from '../types';

const SvgRefresh: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14c6.52 0 12.005-4.46 13.56-10.498l3.873.997C39.435 36.262 32.39 42 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6c5.657 0 10.701 2.609 14 6.686V8h4v12H30v-4h5.491A13.99 13.99 0 0 0 24 10"
      clipRule="evenodd"
    />
  </svg>
);

SvgRefresh.displayName = 'SvgRefresh';

export default SvgRefresh;
