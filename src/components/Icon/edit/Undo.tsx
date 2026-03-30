import React from 'react';
import { IconProps } from '../types';

const SvgUndo: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m13.908 6.81-9.192 9.192 9.192 9.193 2.829-2.829L12.37 18H29.5a9.5 9.5 0 0 1 0 19H17v4h12.5C36.956 41 43 34.956 43 27.5S36.956 14 29.5 14H12.375l4.362-4.362z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUndo.displayName = 'SvgUndo';

export default SvgUndo;
