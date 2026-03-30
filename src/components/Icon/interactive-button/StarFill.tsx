import React from 'react';
import { IconProps } from '../types';

const SvgStarFill: React.FC<IconProps> = ({
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
      d="M26.24 6.023c-.917-1.858-3.566-1.858-4.483 0l-4.67 9.463-10.444 1.518c-2.05.298-2.87 2.818-1.385 4.264l7.556 7.366-1.784 10.4c-.35 2.043 1.794 3.6 3.628 2.636l9.34-4.91 9.34 4.91c1.835.965 3.978-.593 3.628-2.635l-1.784-10.401 7.557-7.366c1.484-1.446.665-3.966-1.386-4.264L30.91 15.486z"
      clipRule="evenodd"
    />
  </svg>
);

SvgStarFill.displayName = 'SvgStarFill';

export default SvgStarFill;
