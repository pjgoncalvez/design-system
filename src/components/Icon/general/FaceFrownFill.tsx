import React from 'react';
import { IconProps } from '../types';

const SvgFaceFrownFill: React.FC<IconProps> = ({
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
      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-8-27v6h4v-6zm12 6v-6h4v6zm-9.564 11.749a6 6 0 0 1 11.128 0l3.709-1.498a10 10 0 0 0-2.202-3.322c-3.905-3.905-10.237-3.905-14.142 0a10 10 0 0 0-2.202 3.322z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFaceFrownFill.displayName = 'SvgFaceFrownFill';

export default SvgFaceFrownFill;
