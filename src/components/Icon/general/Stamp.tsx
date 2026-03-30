import React from 'react';
import { IconProps } from '../types';

const SvgStamp: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 9a6 6 0 0 0-3.81 10.635l1.184.975L17.106 30h13.788l-4.268-9.39 1.184-.975A6 6 0 0 0 24 9M9 34v5h30v-5zm3.712-4H8a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h32a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-4.712l-3.804-8.368A9.97 9.97 0 0 0 34 15c0-5.523-4.477-10-10-10S14 9.477 14 15c0 2.545.952 4.869 2.516 6.632z"
      clipRule="evenodd"
    />
  </svg>
);

SvgStamp.displayName = 'SvgStamp';

export default SvgStamp;
