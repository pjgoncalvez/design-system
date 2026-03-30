import React from 'react';
import { IconProps } from '../types';

const SvgFaceMehFill: React.FC<IconProps> = ({
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
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-8-27v6h4v-6zm16 13v4H16v-4zm-4-13v6h4v-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFaceMehFill.displayName = 'SvgFaceMehFill';

export default SvgFaceMehFill;
