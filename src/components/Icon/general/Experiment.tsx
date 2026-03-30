import React from 'react';
import { IconProps } from '../types';

const SvgExperiment: React.FC<IconProps> = ({
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
      d="M14.5 9h-4V5h27v4h-4v8.137l5.366 14.31 2.409 6.08C42.315 40.152 40.38 43 37.556 43H10.798c-2.744 0-4.673-2.699-3.785-5.295l2.354-6.88L14.5 17.137zm4 0v8.863L13.64 30.82a7.4 7.4 0 0 0 2.796 1.038c1.615.238 3.619-.064 5.772-1.886 3.13-2.649 6.56-3.079 9.488-2.526.532.1 1.048.233 1.545.39L29.5 17.864V9zm16.829 24.378c-.998-.779-2.584-1.662-4.375-2-1.939-.366-4.093-.102-6.162 1.649-3.047 2.578-6.21 3.192-8.94 2.789a11.3 11.3 0 0 1-3.566-1.166L10.798 39h26.758zM24 22.51v-.01h4v.01z"
      clipRule="evenodd"
    />
  </svg>
);

SvgExperiment.displayName = 'SvgExperiment';

export default SvgExperiment;
