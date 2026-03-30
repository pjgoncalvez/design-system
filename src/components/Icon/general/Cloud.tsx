import React from 'react';
import { IconProps } from '../types';

const SvgCloud: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M22 11c-5.505 0-9.97 4.448-10 9.946l-.006 1.232-1.104.549A7 7 0 0 0 14 36h19a8 8 0 0 0 .503-15.984l-1.453-.09-.36-1.411C30.584 14.193 26.662 11 22 11M8.056 19.743C8.69 12.6 14.692 7 22 7c6.045 0 11.191 3.83 13.152 9.193C40.753 17.207 45 22.107 45 28c0 6.627-5.373 12-12 12H14C7.925 40 3 35.075 3 29c0-3.888 2.017-7.302 5.056-9.257"
      clipRule="evenodd"
    />
  </svg>
);

SvgCloud.displayName = 'SvgCloud';

export default SvgCloud;
