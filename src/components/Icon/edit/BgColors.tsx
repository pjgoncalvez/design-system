import React from 'react';
import { IconProps } from '../types';

const SvgBgColors: React.FC<IconProps> = ({
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
      d="m19.922 9-2.336-2.336 2.828-2.828 15.793 15.793a3 3 0 0 1 0 4.242L22.635 37.443a3 3 0 0 1-4.283-.042L7.238 25.843a3 3 0 0 1 .041-4.2zm2.828 2.828L11.328 23.25h19.844l1.5-1.5zM42 44H6v-4h36zm-4.799-17 2.812 2.812a4 4 0 1 1-5.624 0z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBgColors.displayName = 'SvgBgColors';

export default SvgBgColors;
