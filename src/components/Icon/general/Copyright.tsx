import React from 'react';
import { IconProps } from '../types';

const SvgCopyright: React.FC<IconProps> = ({
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m20-6a6 6 0 1 0 3.968 10.5l2.647 3A9.97 9.97 0 0 1 24 34c-5.523 0-10-4.477-10-10s4.477-10 10-10a9.97 9.97 0 0 1 6.615 2.5l-2.647 3A5.97 5.97 0 0 0 24 18"
      clipRule="evenodd"
    />
  </svg>
);

SvgCopyright.displayName = 'SvgCopyright';

export default SvgCopyright;
