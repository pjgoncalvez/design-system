import React from 'react';
import { IconProps } from '../types';

const SvgTag: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M6.828 26.87 25.87 7.828l11.786 2.357 2.357 11.785L20.97 41.012zM26.13 3.8a3 3 0 0 0-2.71.82L3.294 24.75a3 3 0 0 0 0 4.242l15.556 15.557a3 3 0 0 0 4.243 0L43.219 24.42a3 3 0 0 0 .82-2.71L41.448 8.747a3 3 0 0 0-2.353-2.354zm6.447 12.546a1 1 0 0 1-1.492.871 1 1 0 0 1 .989-1.739 1 1 0 0 1 .503.868m-1-3a3 3 0 1 0 .004 6.003 3 3 0 1 0-.004-6.003"
      clipRule="evenodd"
    />
  </svg>
);

SvgTag.displayName = 'SvgTag';

export default SvgTag;
