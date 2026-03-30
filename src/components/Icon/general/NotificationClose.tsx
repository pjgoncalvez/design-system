import React from 'react';
import { IconProps } from '../types';

const SvgNotificationClose: React.FC<IconProps> = ({
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
      d="m40.513 45.338-36-40 2.974-2.676 36 40zM22 7.132V4h4v3.132C33.339 8.11 39 14.394 39 22v7.5h-4V22c0-6.075-4.925-11-11-11-2.007 0-3.883.536-5.499 1.47l-2.003-3.462c1.66-.96 3.521-1.611 5.502-1.876M9 22c0-2.113.438-4.13 1.23-5.958l3.67 1.59A11 11 0 0 0 13 22v11h13.5v4H6v-4h3zm22 18v4H17v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgNotificationClose.displayName = 'SvgNotificationClose';

export default SvgNotificationClose;
