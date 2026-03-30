import React from 'react';
import { IconProps } from '../types';

const SvgTags: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m11.418 21.76 12.8-12.8 9.35.55.55 9.349-12.8 12.8zM24.005 4.94a3 3 0 0 0-2.298.873L7.883 19.638a3 3 0 0 0 0 4.243l11.314 11.313a3 3 0 0 0 4.242 0L37.264 21.37a3 3 0 0 0 .873-2.298L37.51 8.387a3 3 0 0 0-2.819-2.819zm3.719 10.377-.026-.024a1 1 0 1 1 .026.024m-1.367 1.46-.073-.07a3 3 0 1 1 .073.07m9.81 9.932L22.025 40.85 10.005 28.83l-2.829 2.828 12.728 12.728a3 3 0 0 0 4.243 0l14.849-14.849z"
      clipRule="evenodd"
    />
  </svg>
);

SvgTags.displayName = 'SvgTags';

export default SvgTags;
