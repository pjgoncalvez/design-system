import React from 'react';
import { IconProps } from '../types';

const SvgHeart: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M22.587 14.327a7.97 7.97 0 0 0-11.257 0 7.93 7.93 0 0 0-.15 11.074l.159.163 12.314 12.293a.493.493 0 0 0 .694 0l12.314-12.293.16-.163a7.93 7.93 0 0 0-.15-11.074 7.97 7.97 0 0 0-11.258 0L24 15.737zM24 10.287c-4.677-3.41-11.273-3.007-15.496 1.21-4.6 4.591-4.67 11.993-.212 16.672l.009.01.194.198 12.332 12.31a4.493 4.493 0 0 0 6.346 0l12.332-12.31.194-.198.009-.01c4.459-4.679 4.388-12.08-.212-16.673C35.273 7.28 28.676 6.877 24 10.288"
      clipRule="evenodd"
    />
  </svg>
);

SvgHeart.displayName = 'SvgHeart';

export default SvgHeart;
