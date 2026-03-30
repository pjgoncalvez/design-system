import React from 'react';
import { IconProps } from '../types';

const SvgOriginalSize: React.FC<IconProps> = ({
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
      d="M13.5 7h-3.472L4.606 9.711l1.788 3.578L9.5 11.736V41h4zM42 7h-3.472l-5.422 2.711 1.788 3.578L38 11.736V41h4zm-15 8h-5v5h5zm0 13h-5v5h5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgOriginalSize.displayName = 'SvgOriginalSize';

export default SvgOriginalSize;
