import React from 'react';
import { IconProps } from '../types';

const SvgLink: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M10.565 31.778a4 4 0 0 0 5.657 5.657l8.485-8.485a4 4 0 0 0 0-5.657l2.828-2.829a8 8 0 0 1 0 11.314l-8.485 8.485A8 8 0 0 1 7.737 28.95l4.95-4.95 2.828 2.828zm9.9-4.242a8 8 0 0 1 0-11.314l8.485-8.485A8 8 0 0 1 40.264 19.05L35.314 24l-2.829-2.828 4.95-4.95a4 4 0 0 0-5.657-5.657l-8.485 8.485a4 4 0 0 0 0 5.657z"
      clipRule="evenodd"
    />
  </svg>
);

SvgLink.displayName = 'SvgLink';

export default SvgLink;
