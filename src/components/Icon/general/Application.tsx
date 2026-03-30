import React from 'react';
import { IconProps } from '../types';

const SvgApplication: React.FC<IconProps> = ({
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
      d="M13 6H7v6h6zm0 15H7v6h6zm0 15H7v6h6zm8-30h6v6h-6zm0 15h6v6h-6zm0 15h6v6h-6zM35 6h6v6h-6zm0 15h6v6h-6zm0 15h6v6h-6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgApplication.displayName = 'SvgApplication';

export default SvgApplication;
