import React from 'react';
import { IconProps } from '../types';

const SvgPushpin: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M28.406 5.536a4 4 0 0 1 5.657 0l8.485 8.485a4 4 0 0 1 0 5.657l-4.06 4.06a9.86 9.86 0 0 1-2.532 9.603l-5.12 5.12a2.437 2.437 0 0 1-3.446 0l-7.47-7.47L8.607 42.305l-2.829-2.828 11.314-11.314-7.36-7.36a2.59 2.59 0 0 1 0-3.665l5.027-5.027a9.83 9.83 0 0 1 9.589-2.517zm2.828 2.828-4.89 4.89a2.13 2.13 0 0 1-2.34.45 5.83 5.83 0 0 0-6.417 1.236l-4.03 4.03 15.556 15.557 4.014-4.015a5.86 5.86 0 0 0 1.243-6.453 2.09 2.09 0 0 1 .444-2.304l4.905-4.906z"
      clipRule="evenodd"
    />
  </svg>
);

SvgPushpin.displayName = 'SvgPushpin';

export default SvgPushpin;
