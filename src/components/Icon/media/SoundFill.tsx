import React from 'react';
import { IconProps } from '../types';

const SvgSoundFill: React.FC<IconProps> = ({
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
      d="M26 8a2 2 0 0 0-3.147-1.638L13.37 13H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h7.37l9.483 6.639A2 2 0 0 0 26 40zm9.314 4.414c6.248 6.249 6.248 16.38 0 22.628l2.828 2.828c7.81-7.81 7.81-20.474 0-28.284zm-5.657 6a8 8 0 0 1 0 11.314l2.828 2.828c4.687-4.686 4.687-12.284 0-16.97z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSoundFill.displayName = 'SvgSoundFill';

export default SvgSoundFill;
