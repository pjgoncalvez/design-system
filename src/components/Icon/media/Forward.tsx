import React from 'react';
import { IconProps } from '../types';

const SvgForward: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M6 12.414c0-2.672 3.231-4.011 5.121-2.121l11.586 11.586a3 3 0 0 1 0 4.242L11.121 37.707C9.231 39.597 6 38.258 6 35.586zm4 2.414v18.344L19.172 24zm19 0v18.344L38.172 24zm-4-2.414c0-2.672 3.231-4.011 5.121-2.121l11.586 11.586a3 3 0 0 1 0 4.242L30.121 37.707c-1.89 1.89-5.121.551-5.121-2.121z"
      clipRule="evenodd"
    />
  </svg>
);

SvgForward.displayName = 'SvgForward';

export default SvgForward;
