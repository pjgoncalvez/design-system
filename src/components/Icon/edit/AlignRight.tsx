import React from 'react';
import { IconProps } from '../types';

const SvgAlignRight: React.FC<IconProps> = ({
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
      d="M44 7H4v4h40zm0 10H23v4h21zm0 10H8v4h36zm0 10H23v4h21z"
      clipRule="evenodd"
    />
  </svg>
);

SvgAlignRight.displayName = 'SvgAlignRight';

export default SvgAlignRight;
