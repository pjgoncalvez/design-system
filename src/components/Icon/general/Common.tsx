import React from 'react';
import { IconProps } from '../types';

const SvgCommon: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m24 2.737 19 10.059v22.408L24 45.263 5 35.204V12.796zM9 17.322v15.474l13 6.882V24.204zm17 6.882v15.474l13-6.882V17.322zM36.725 14 24 7.263 11.275 14 24 20.737z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCommon.displayName = 'SvgCommon';

export default SvgCommon;
