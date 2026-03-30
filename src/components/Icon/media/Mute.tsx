import React from 'react';
import { IconProps } from '../types';

const SvgMute: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m40.086 42.914-35-35 2.828-2.828 35 35zM22 11.491V17h4V7.224c0-1.818-2.153-2.777-3.505-1.56l-4.833 4.35 2.676 2.973zm15.321 19.64c3.031-6.282 2.135-13.303-3.007-18.445l2.828-2.828c6.42 6.419 7.506 15.293 3.782 23.011zM9 18h1v-4H7.1A2.1 2.1 0 0 0 5 16.1v15.8c0 1.16.94 2.1 2.1 2.1h6.133l9.262 8.336c1.352 1.217 3.505.258 3.505-1.56V31h-4v5.51L14.768 30H9zm21.942 7.257c.777-1.942-.1-4.729-2.285-6.914l2.828-2.829c2.743 2.743 4.796 7.17 3.17 11.23z"
      clipRule="evenodd"
    />
  </svg>
);

SvgMute.displayName = 'SvgMute';

export default SvgMute;
