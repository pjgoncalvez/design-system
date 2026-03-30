import React from 'react';
import { IconProps } from '../types';

const SvgTool: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    {...props}
  >
    <g clipPath="url(#tool_svg__a)">
      <path
        fill={color}
        fillRule="evenodd"
        d="m38.38 18.106-4.244 4.243a3 3 0 0 1-4.243 0l-4.242-4.242a3 3 0 0 1 0-4.243l4.243-4.244a10.005 10.005 0 0 0-10.441 14.212l.61 1.277L9.387 35.784l2.829 2.829L22.89 27.937l1.276.61A10.005 10.005 0 0 0 38.38 18.106m-.584-5.074c1.023-1.023 2.77-.733 3.39.602 2.396 5.174 1.464 11.515-2.807 15.786-3.951 3.951-9.672 5.045-14.603 3.29l-9.439 9.438a3 3 0 0 1-4.242 0l-4.243-4.242a3 3 0 0 1 0-4.243l9.438-9.438c-1.755-4.932-.661-10.653 3.29-14.604C22.85 5.35 29.192 4.418 34.366 6.815c1.335.618 1.625 2.366.602 3.39l-5.782 5.78 2.829 2.829z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tool_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);

SvgTool.displayName = 'SvgTool';

export default SvgTool;
