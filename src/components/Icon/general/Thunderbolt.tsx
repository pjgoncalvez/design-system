import React from 'react';
import { IconProps } from '../types';

const SvgThunderbolt: React.FC<IconProps> = ({
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
      d="M26 10.376 13.37 25H22v12.624L34.632 23h-8.63zm.312-6.48C27.583 2.424 30 3.323 30 5.27V19h8.781c1.798 0 2.765 2.112 1.59 3.473L21.69 44.103c-1.272 1.474-3.69.574-3.69-1.372V29H9.22c-1.798 0-2.765-2.112-1.59-3.473z"
      clipRule="evenodd"
    />
  </svg>
);

SvgThunderbolt.displayName = 'SvgThunderbolt';

export default SvgThunderbolt;
