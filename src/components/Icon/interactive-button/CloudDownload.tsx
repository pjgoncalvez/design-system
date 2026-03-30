import React from 'react';
import { IconProps } from '../types';

const SvgCloudDownload: React.FC<IconProps> = ({
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
      d="M16 21.998V22l.004 1.846-1.784.197A7.001 7.001 0 0 0 15 38h13v4H15C8.925 42 4 37.075 4 31c0-5.065 3.422-9.33 8.082-10.608C12.916 12.258 20.006 6 28.5 6 37.546 6 45 13.098 45 22h-4c0-6.562-5.53-12-12.5-12S16.001 15.437 16 21.998m19.07 14.315V26h4v10.315l3.658-3.658 2.828 2.828-8.485 8.486-8.485-8.486 2.828-2.828z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCloudDownload.displayName = 'SvgCloudDownload';

export default SvgCloudDownload;
