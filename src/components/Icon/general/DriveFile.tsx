import React from 'react';
import { IconProps } from '../types';

const SvgDriveFile: React.FC<IconProps> = ({
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
      d="M11 8v32h26V19h-8a3 3 0 0 1-3-3V8zm19 2.828V15h4.172zM7 7a3 3 0 0 1 3-3h18.828L41 16.172V41a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDriveFile.displayName = 'SvgDriveFile';

export default SvgDriveFile;
