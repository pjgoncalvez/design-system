import React from 'react';
import { IconProps } from '../types';

const SvgBulb: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 7c-6.075 0-11 4.925-11 11 0 2.392.761 4.6 2.054 6.403l.323.448c1.41 1.955 3.13 4.337 3.773 7.172L19.598 34h8.804l.448-1.977c.643-2.835 2.362-5.217 3.773-7.172l.323-.448A10.94 10.94 0 0 0 35 18c0-6.075-4.925-11-11-11M9 18C9 9.716 15.716 3 24 3s15 6.716 15 15a14.94 14.94 0 0 1-2.804 8.734l-.2.279c-1.53 2.13-2.79 3.884-3.245 5.894l-.624 2.756A3 3 0 0 1 29.201 38H18.8a3 3 0 0 1-2.926-2.337l-.624-2.756c-.456-2.01-1.715-3.763-3.245-5.894l-.2-.279A14.94 14.94 0 0 1 9 18m22 22v4H17v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBulb.displayName = 'SvgBulb';

export default SvgBulb;
