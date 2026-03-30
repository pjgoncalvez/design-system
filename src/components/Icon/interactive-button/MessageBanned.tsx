import React from 'react';
import { IconProps } from '../types';

const SvgMessageBanned: React.FC<IconProps> = ({
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
      d="M5 24C5 13.507 13.507 5 24 5c8.956 0 16.46 6.195 18.471 14.531l-3.888.938C36.995 13.888 31.066 9 24 9 15.716 9 9 15.716 9 24v15h12v4H5zm20-2H13v-4h12zm5.67 5.841 9.489 9.49a7.003 7.003 0 0 0-9.49-9.49m6.66 12.318-9.489-9.49a7.003 7.003 0 0 0 9.49 9.49M26.223 26.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556M19 31h-6v-4h6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMessageBanned.displayName = 'SvgMessageBanned';

export default SvgMessageBanned;
