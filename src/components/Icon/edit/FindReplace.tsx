import React from 'react';
import { IconProps } from '../types';

const SvgFindReplace: React.FC<IconProps> = ({
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
      d="m38.71 34.381 5.058 5.058-2.828 2.829-5.058-5.058a10.96 10.96 0 0 1-6.235 1.936c-6.075 0-11-4.924-11-11 0-6.104 4.895-11 11-11 6.104 0 11 4.896 11 11 0 2.315-.716 4.464-1.937 6.235M5.647 6.146h36v4h-36zm31 22c0-3.895-3.105-7-7-7s-7 3.105-7 7a7 7 0 1 0 14 0m-31-6h10v4h-10zm0 16h10v4h-10z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFindReplace.displayName = 'SvgFindReplace';

export default SvgFindReplace;
