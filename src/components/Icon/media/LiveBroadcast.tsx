import React from 'react';
import { IconProps } from '../types';

const SvgLiveBroadcast: React.FC<IconProps> = ({
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
      d="M14.546 14H7a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V17a3 3 0 0 0-3-3h-7.546l5.04-5.671-2.989-2.658-7.403 8.33h-8.204l-7.403-8.33-2.99 2.658zM8 18v20h32V18zm14.5 8.066v4.523l3.392-2.45zm-4-1.783c0-2.343 2.565-3.781 4.564-2.56l6.196 3.787c1.83 1.117 1.93 3.737.192 4.992l-6.196 4.474c-1.983 1.433-4.756.016-4.756-2.432z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLiveBroadcast.displayName = 'SvgLiveBroadcast';

export default SvgLiveBroadcast;
