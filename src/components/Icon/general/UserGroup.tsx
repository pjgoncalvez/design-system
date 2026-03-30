import React from 'react';
import { IconProps } from '../types';

const SvgUserGroup: React.FC<IconProps> = ({
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
      d="M13 15a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18m14 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12M4 34a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v8H4zm8-4a4 4 0 0 0-4 4v4h20v-4a4 4 0 0 0-4-4zm32 4a6 6 0 0 0-6-6h-4v4h4a2 2 0 0 1 2 2v2h-6v4h10z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUserGroup.displayName = 'SvgUserGroup';

export default SvgUserGroup;
