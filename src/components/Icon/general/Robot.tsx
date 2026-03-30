import React from 'react';
import { IconProps } from '../types';

const SvgRobot: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M29 5H19v4h3v2H7v31h34V11H26V9h3zM11 38V15h26v23zM1 21v11h4V21zm42 0v11h4V21zm-22 3h-5v5h5zm11 0h-5v5h5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRobot.displayName = 'SvgRobot';

export default SvgRobot;
