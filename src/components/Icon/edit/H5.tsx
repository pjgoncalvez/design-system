import React from 'react';
import { IconProps } from '../types';

const SvgH5: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 6H4v36h4V26h16v16h4V6h-4v16H8zm35 13H30.5v13h3.106l.485-.323.002-.002q.022-.015.106-.058c.11-.057.294-.146.547-.237A6.6 6.6 0 0 1 37 31a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3c-.664 0-1.533-.212-2.31-.614-.806-.417-1.226-.886-1.357-1.187l-3.666 1.602c.64 1.465 1.946 2.496 3.184 3.137C34.119 41.595 35.614 42 37 42a7 7 0 0 0 7-7v-1a7 7 0 0 0-7-7c-.952 0-1.792.12-2.5.287V23H43z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH5.displayName = 'SvgH5';

export default SvgH5;
