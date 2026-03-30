import React from 'react';
import { IconProps } from '../types';

const SvgHistory: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4.189 21.243H1.783L6 27.63l4.217-6.387h-1.98C9.543 13.72 16.104 8 24 8c8.837 0 16 7.163 16 16s-7.163 16-16 16c-5.563 0-10.465-2.838-13.334-7.154l-3.331 2.215C10.915 40.445 17.04 44 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4C13.89 4 5.532 11.502 4.189 21.243M25 24v-7h-4v11h11v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgHistory.displayName = 'SvgHistory';

export default SvgHistory;
