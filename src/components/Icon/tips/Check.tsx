import React from 'react';
import { IconProps } from '../types';

const SvgCheck: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M19.05 30.85 40.263 9.635l2.829 2.829L19.05 36.506 4.908 22.364l2.829-2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCheck.displayName = 'SvgCheck';

export default SvgCheck;
