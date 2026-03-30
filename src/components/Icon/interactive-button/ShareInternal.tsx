import React from 'react';
import { IconProps } from '../types';

const SvgShareInternal: React.FC<IconProps> = ({
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
      d="M31.414 4.586 41.828 15 31.414 25.414l-2.828-2.828 5.324-5.325c-5.597.582-10.583 2.101-14.465 4.225-4.969 2.717-7.84 6.24-8.357 9.802l-3.959-.576c.772-5.306 4.86-9.708 10.396-12.736 4.615-2.523 10.44-4.22 16.846-4.777l-5.785-5.785zM10 39v-4H6v8h36v-8h-4v4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgShareInternal.displayName = 'SvgShareInternal';

export default SvgShareInternal;
