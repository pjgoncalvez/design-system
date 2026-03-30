import React from 'react';
import { IconProps } from '../types';

const SvgSound: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24.814 5.173A2 2 0 0 1 26 7v34a2 2 0 0 1-3.338 1.487L13.232 34H6a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h7.233l9.43-8.487a2 2 0 0 1 2.15-.34M22 11.491l-6.662 5.996A2 2 0 0 1 14 18H8v12h6a2 2 0 0 1 1.338.513L22 36.51zm7.657 18.166a8 8 0 0 0 0-11.314l2.828-2.828c4.687 4.686 4.687 12.284 0 16.97zm5.657-16.97c6.248 6.248 6.248 16.378 0 22.627l2.828 2.828c7.81-7.81 7.81-20.473 0-28.284z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSound.displayName = 'SvgSound';

export default SvgSound;
