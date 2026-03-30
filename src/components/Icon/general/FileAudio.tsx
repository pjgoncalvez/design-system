import React from 'react';
import { IconProps } from '../types';

const SvgFileAudio: React.FC<IconProps> = ({
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
      d="M11 4a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V12.172L32.828 4zm0 4h20.172L37 13.828V40H11zm18.671 11.973-3.481-.58.763 9.918Q27 29.649 27 30a5 5 0 1 1-4.388-4.963l-.557-7.247a2.5 2.5 0 0 1 2.904-2.658l5.37.895zm-6.673 10.084-.02-.267a1 1 0 1 0 .02.267"
      clipRule="evenodd"
    />
  </svg>
);

SvgFileAudio.displayName = 'SvgFileAudio';

export default SvgFileAudio;
