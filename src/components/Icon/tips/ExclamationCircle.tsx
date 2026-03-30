import React from 'react';
import { IconProps } from '../types';

const SvgExclamationCircle: React.FC<IconProps> = ({
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
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16m20-16c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20M22 34v-4h4v4zm4-20v14h-4V14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgExclamationCircle.displayName = 'SvgExclamationCircle';

export default SvgExclamationCircle;
