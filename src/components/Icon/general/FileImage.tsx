import React from 'react';
import { IconProps } from '../types';

const SvgFileImage: React.FC<IconProps> = ({
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
      d="M7 8a4 4 0 0 1 4-4h21.828L41 12.172V40a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4zm24.172 0H11v32h26V13.828zM15 17h5v5h-5zm18 4.476V35H14.172l9.044-9.045 2.867 3.822z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFileImage.displayName = 'SvgFileImage';

export default SvgFileImage;
