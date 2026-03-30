import React from 'react';
import { IconProps } from '../types';

const SvgStop: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M14.188 11.36 36.64 33.812c4.885-6.277 4.443-15.356-1.326-21.126s-14.85-6.211-21.126-1.326m19.624 25.28L11.36 14.188c-4.885 6.277-4.443 15.356 1.326 21.126s14.85 6.211 21.126 1.326M9.858 9.858c7.81-7.81 20.474-7.81 28.284 0s7.81 20.474 0 28.284-20.474 7.81-28.284 0-7.81-20.474 0-28.284"
      clipRule="evenodd"
    />
  </svg>
);

SvgStop.displayName = 'SvgStop';

export default SvgStop;
