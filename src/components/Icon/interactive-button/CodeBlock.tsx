import React from 'react';
import { IconProps } from '../types';

const SvgCodeBlock: React.FC<IconProps> = ({
  size = 24,
  color = '#4E5969',
  className,
  ...props
}) => (
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
      d="M15 8a1 1 0 0 0-1 1v10c0 2.287-1.48 3.964-2.863 5C12.52 25.037 14 26.713 14 29v10a1 1 0 0 0 1 1h4v4h-4a5 5 0 0 1-5-5V29c0-.493-.393-1.22-1.5-1.969a7.3 7.3 0 0 0-1.551-.793C6.417 26.043 6.085 26 6 26v-4c.085 0 .417-.043.949-.238A7.3 7.3 0 0 0 8.5 20.97C9.607 20.219 10 19.493 10 19V9a5 5 0 0 1 5-5h4v4zm18 0h-4V4h4a5 5 0 0 1 5 5v10c0 .493.393 1.22 1.5 1.969.502.34 1.054.611 1.551.793.532.195.864.238.949.238v4c-.085 0-.417.043-.949.238a7.3 7.3 0 0 0-1.551.793c-1.107.75-1.5 1.476-1.5 1.969v10a5 5 0 0 1-5 5h-4v-4h4a1 1 0 0 0 1-1V29c0-2.287 1.48-3.963 2.863-5C35.48 22.963 34 21.287 34 19V9a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);

SvgCodeBlock.displayName = 'SvgCodeBlock';

export default SvgCodeBlock;
