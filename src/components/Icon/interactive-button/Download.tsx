import React from 'react';
import { IconProps } from '../types';

const SvgDownload: React.FC<IconProps> = ({
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
      d="M22 26.313V5h4v21.315l5.658-5.658 2.828 2.828-10.485 10.486-10.485-10.486 2.828-2.828zM10 39v-4H6v8h36v-8h-4v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDownload.displayName = 'SvgDownload';

export default SvgDownload;
