import React from 'react';
import { IconProps } from '../types';

const SvgCustomerService: React.FC<IconProps> = ({
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
      d="M9.033 19C9.547 11.182 16.052 5 24 5s14.453 6.182 14.967 14H40a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1.3c-1.082 5.33-4.988 9.63-10.085 11.276-1.456.47-3.008.724-4.615.724h-3a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6c1.408 0 2.59.97 2.913 2.278A11 11 0 0 0 35 28v-8c0-6.075-4.925-11-11-11s-11 4.925-11 11v11H8a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCustomerService.displayName = 'SvgCustomerService';

export default SvgCustomerService;
