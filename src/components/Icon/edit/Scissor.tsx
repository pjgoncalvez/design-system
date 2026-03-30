import React from 'react';
import { IconProps } from '../types';

const SvgScissor: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="m24 21.172 14.879-14.88 2.828 2.83L26.828 24l4.108 4.108a8 8 0 1 1-2.828 2.828L24 26.828l-4.108 4.108a8 8 0 1 1-2.828-2.828L21.172 24 6.292 9.121l2.83-2.828zM13 31a4 4 0 1 0 0 8 4 4 0 0 0 0-8m22 0a3.98 3.98 0 0 0-2.828 1.172A4 4 0 1 0 35 31"
      clipRule="evenodd"
    />
  </svg>
);

SvgScissor.displayName = 'SvgScissor';

export default SvgScissor;
