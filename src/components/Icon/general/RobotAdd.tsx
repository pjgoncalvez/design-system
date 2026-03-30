import React from 'react';
import { IconProps } from '../types';

const SvgRobotAdd: React.FC<IconProps> = ({
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
      d="M19 5h10v4h-3v2h15v13h-4v-9H11v23h17v4H7V11h15V9h-3zM1 32V21h4v11zm15-8h5v5h-5zm11 0h5v5h-5zm10 9v-5h4v5h5v4h-5v5h-4v-5h-5v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgRobotAdd.displayName = 'SvgRobotAdd';

export default SvgRobotAdd;
