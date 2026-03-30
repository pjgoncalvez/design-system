import React from 'react';
import { IconProps } from '../types';

const SvgCloseCircle: React.FC<IconProps> = ({
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
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m17.178.007-4.95-4.95 2.83-2.828 4.949 4.95 4.95-4.95 2.828 2.828-4.95 4.95 4.95 4.95-2.828 2.828-4.95-4.95-4.95 4.95-2.828-2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCloseCircle.displayName = 'SvgCloseCircle';

export default SvgCloseCircle;
