import React from 'react';
import { IconProps } from '../types';

const SvgBackward: React.FC<IconProps> = ({
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
      d="M17.879 10.293C19.769 8.403 23 9.74 23 12.414v23.172c0 2.672-3.231 4.011-5.121 2.121L6.293 26.121a3 3 0 0 1 0-4.242zM19 14.828 9.828 24 19 33.172zm17.879-4.535C38.769 8.403 42 9.74 42 12.414v23.172c0 2.672-3.231 4.011-5.121 2.121L25.293 26.121a3 3 0 0 1 0-4.242zM38 14.828 28.828 24 38 33.172z"
      clipRule="evenodd"
    />
  </svg>
);

SvgBackward.displayName = 'SvgBackward';

export default SvgBackward;
