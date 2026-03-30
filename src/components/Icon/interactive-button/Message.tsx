import React from 'react';
import { IconProps } from '../types';

const SvgMessage: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M5 24C5 13.507 13.507 5 24 5s19 8.507 19 19v.63C43 34.775 34.775 43 24.63 43H5zM24 9C15.716 9 9 15.716 9 24v15h15.63C32.566 39 39 32.566 39 24.63V24c0-8.284-6.716-15-15-15m9 9v4H15v-4zm-9 13h-9v-4h9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMessage.displayName = 'SvgMessage';

export default SvgMessage;
