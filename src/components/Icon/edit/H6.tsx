import React from 'react';
import { IconProps } from '../types';

const SvgH6: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 6H4v36h4V26h16v16h4V6h-4v16H8zm31.8 17.497c-2.641-.265-5.127 1.531-5.684 4.159A6.6 6.6 0 0 1 37 27c4.041 0 7 3.542 7 7.5S41.041 42 37 42s-7-3.541-7-7.5v-5.73c0-5.671 4.933-9.78 10.2-9.253.448.045.795.086 1.073.132l-.643 3.948a15 15 0 0 0-.83-.1M37 31c-1.482 0-3 1.383-3 3.5s1.518 3.5 3 3.5 3-1.383 3-3.5-1.518-3.5-3-3.5"
      clipRule="evenodd"
    />
  </svg>
);

SvgH6.displayName = 'SvgH6';

export default SvgH6;
