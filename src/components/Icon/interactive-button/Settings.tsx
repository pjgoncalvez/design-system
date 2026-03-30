import React from 'react';
import { IconProps } from '../types';

const SvgSettings: React.FC<IconProps> = ({
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
      d="M16.87 6.197A3 3 0 0 1 19.76 4h8.48a3 3 0 0 1 2.89 2.197l1.023 3.682 3.7-.956a3 3 0 0 1 3.348 1.405l4.24 7.344a3 3 0 0 1-.458 3.602L40.307 24l2.676 2.726a3 3 0 0 1 .458 3.602l-4.24 7.344a3 3 0 0 1-3.348 1.405l-3.7-.956-1.022 3.682A3 3 0 0 1 28.24 44h-8.48a3 3 0 0 1-2.89-2.197l-1.023-3.681-3.7.955A3 3 0 0 1 8.8 37.672l-4.24-7.344a3 3 0 0 1 .457-3.602L7.694 24l-2.677-2.726a3 3 0 0 1-.457-3.602l4.24-7.344a3 3 0 0 1 3.348-1.405l3.699.955zM20.52 8l-1.082 3.895a3 3 0 0 1-3.64 2.102l-3.914-1.01-3.48 6.027 2.832 2.884a3 3 0 0 1 0 4.204l-2.832 2.884 3.48 6.028 3.914-1.01a3 3 0 0 1 3.64 2.101L20.52 40h6.96l1.082-3.895a3 3 0 0 1 3.64-2.102l3.915 1.01 3.48-6.027-2.833-2.884a3 3 0 0 1 0-4.204l2.833-2.884-3.48-6.028-3.915 1.011a3 3 0 0 1-3.64-2.102L27.48 8zM24 20a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-8 4a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
      clipRule="evenodd"
    />
  </svg>
);

SvgSettings.displayName = 'SvgSettings';

export default SvgSettings;
