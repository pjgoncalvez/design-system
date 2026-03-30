import React from 'react';
import { IconProps } from '../types';

const SvgInteraction: React.FC<IconProps> = ({
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
      d="M6 8a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4zm32 0H10v9h28zm0 13H26v19h12zM22 40V21H10v19z"
      clipRule="evenodd"
    />
  </svg>
);

SvgInteraction.displayName = 'SvgInteraction';

export default SvgInteraction;
