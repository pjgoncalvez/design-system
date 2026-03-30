import React from 'react';
import { IconProps } from '../types';

const SvgNotification: React.FC<IconProps> = ({
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
      d="M22 7.132V4h4v3.132C33.339 8.11 39 14.394 39 22v11h3v4H6v-4h3V22c0-7.606 5.661-13.89 13-14.868M13 33h22V22c0-6.075-4.925-11-11-11s-11 4.925-11 11zm18 7v4H17v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgNotification.displayName = 'SvgNotification';

export default SvgNotification;
