import React from 'react';
import { IconProps } from '../types';

const SvgDashboard: React.FC<IconProps> = ({
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
      d="m18.237 15.929-4.797-3.78A15 15 0 0 1 22 8.121V13.5h4V8.12a14.98 14.98 0 0 1 8.287 3.778l-4.617 4.108 2.66 2.988 4.572-4.068A17.3 17.3 0 0 1 39.63 22H33.5v4h6.243c-.324 3.462-1.771 6.84-4.549 9.575l2.807 2.85c4.152-4.088 5.938-9.342 5.806-14.476-.123-4.838-1.947-9.597-5.114-13.258C35.23 6.688 30.154 4 24 4c-6.369 0-11.581 2.88-15.048 7.112-3.874 4.731-5.595 11.18-4.384 17.277.721 3.635 2.484 7.135 5.432 10.036l2.806-2.85c-1.91-1.88-3.186-4.059-3.905-6.354l7.326-2.858-1.454-3.726L8.202 25.2c-.154-3.493.813-7.02 2.693-9.964l4.867 3.834zM17 37a7 7 0 0 1 5-6.71V19h4v11.29A7 7 0 1 1 17 37m4 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgDashboard.displayName = 'SvgDashboard';

export default SvgDashboard;
