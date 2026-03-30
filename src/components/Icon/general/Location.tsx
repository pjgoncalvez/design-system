import React from 'react';
import { IconProps } from '../types';

const SvgLocation: React.FC<IconProps> = ({
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
      d="M11 20.405C11 12.951 16.87 7 24 7s13 5.951 13 13.405c0 1.61-.735 3.72-2.09 6.145-1.327 2.375-3.122 4.832-4.958 7.077A93 93 0 0 1 24 40.2a92.617 92.617 0 0 1-5.952-6.572c-1.836-2.246-3.631-4.703-4.958-7.078-1.355-2.425-2.09-4.535-2.09-6.145m11.63 24.052L24 43l1.37 1.457L24 45.744zm0 0L24 43l1.37 1.457.004-.003.01-.01.035-.033.133-.127q.174-.166.492-.477a96.683 96.683 0 0 0 7.004-7.647c1.914-2.341 3.869-5 5.354-7.66C39.86 25.89 41 23.05 41 20.406 41 10.843 33.439 3 24 3S7 10.843 7 20.405c0 2.645 1.14 5.486 2.598 8.096 1.485 2.659 3.44 5.318 5.354 7.658a97 97 0 0 0 7.496 8.125l.06.057.073.07.035.033.01.01zM21 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
      clipRule="evenodd"
    />
  </svg>
);

SvgLocation.displayName = 'SvgLocation';

export default SvgLocation;
