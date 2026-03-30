import React from 'react';
import { IconProps } from '../types';

const SvgVideoCamera: React.FC<IconProps> = ({
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
      d="M8 13v22h23V13zm-4-1a3 3 0 0 1 3-3h25a3 3 0 0 1 3 3v3.312l6.138-1.841A3 3 0 0 1 45 16.344v15.312a3 3 0 0 1-3.862 2.873L35 32.69V36a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm31 16.512 6 1.8V17.688l-6 1.8zM17 21h-6v-4h6z"
      clipRule="evenodd"
    />
  </svg>
);

SvgVideoCamera.displayName = 'SvgVideoCamera';

export default SvgVideoCamera;
