import React from 'react';
import { IconProps } from '../types';

const SvgMan: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M40 6H29v4h6.171l-5.518 5.518A14.94 14.94 0 0 0 20 12c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15c0-3.164-.98-6.1-2.652-8.52L38 12.829V19h4V6zM28.174 19.639l.03.033A10.96 10.96 0 0 1 31 27c0 6.075-4.925 11-11 11S9 33.075 9 27s4.925-11 11-11c3.244 0 6.16 1.405 8.174 3.639"
      clipRule="evenodd"
    />
  </svg>
);

SvgMan.displayName = 'SvgMan';

export default SvgMan;
