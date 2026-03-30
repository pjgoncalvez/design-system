import React from 'react';
import { IconProps } from '../types';

const SvgQuestion: React.FC<IconProps> = ({
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
      d="M24 9c-5.154 0-9 3.757-9 8h-4c0-6.802 6.004-12 13-12s13 5.198 13 12c0 4.424-2.577 8.208-6.274 10.273-1.321.737-2.546 1.641-3.419 2.657C26.443 30.935 26 31.955 26 33v3h-4v-3c0-2.268.985-4.178 2.273-5.677 1.28-1.488 2.93-2.664 4.502-3.543C31.377 22.327 33 19.79 33 17c0-4.243-3.846-8-9-8m-2 30h4.02v4.02H22z"
      clipRule="evenodd"
    />
  </svg>
);

SvgQuestion.displayName = 'SvgQuestion';

export default SvgQuestion;
