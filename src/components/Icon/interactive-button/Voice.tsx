import React from 'react';
import { IconProps } from '../types';

const SvgVoice: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M13 15c0-6.075 4.925-11 11-11s11 4.925 11 11v6c0 6.075-4.925 11-11 11s-11-4.925-11-11zm11-7a7 7 0 0 0-7 7v6a7 7 0 1 0 14 0v-6a7 7 0 0 0-7-7M9 21v1c0 7.732 6.268 14 14 14h2c7.732 0 14-6.268 14-14v-1h4v1c0 9.606-7.524 17.454-17 17.973V44h-4v-4.027C12.524 39.453 5 31.606 5 22v-1z"
      clipRule="evenodd"
    />
  </svg>
);

SvgVoice.displayName = 'SvgVoice';

export default SvgVoice;
