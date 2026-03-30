import React from 'react';
import { IconProps } from '../types';

const SvgShake: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M19.05 3.494 7.737 14.808l2.828 2.828L21.88 6.323zm11.314 1.414a3 3 0 0 0-4.242 0L4.908 26.122a3 3 0 0 0 0 4.242l12.728 12.728a3 3 0 0 0 4.243 0L43.092 21.88a3 3 0 0 0 0-4.243zM8.444 28.243l19.799-19.8 11.314 11.315-19.8 19.799zm33.234-2.121L30.364 37.435l2.829 2.829L44.506 28.95zm-21.92 2.12a3 3 0 1 0 0 4.244 3 3 0 0 0 0-4.243m-1.415 2.83a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.414"
      clipRule="evenodd"
    />
  </svg>
);

SvgShake.displayName = 'SvgShake';

export default SvgShake;
