import React from 'react';
import { IconProps } from '../types';

const SvgEmail: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M7 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 32V10h32v28zm4.138-22.644L24 23.568l11.862-8.212 2.276 3.288-12.43 8.606a3 3 0 0 1-3.416 0l-12.43-8.606z"
      clipRule="evenodd"
    />
  </svg>
);

SvgEmail.displayName = 'SvgEmail';

export default SvgEmail;
