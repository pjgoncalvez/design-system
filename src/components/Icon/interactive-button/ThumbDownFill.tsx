import React from 'react';
import { IconProps } from '../types';

const SvgThumbDownFill: React.FC<IconProps> = ({
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
      d="M19.025 44.028a3 3 0 0 0 4.158-.585L31.985 32H36V6H12.731a3 3 0 0 0-2.859 2.09L3.923 26.787C3.103 29.367 5.028 32 7.735 32l10.22-.059-.323.844c-.164.43-.366.879-.598 1.398q-.111.247-.23.516c-.312.703-.658 1.515-.898 2.33-.236.8-.423 1.771-.281 2.762a4.16 4.16 0 0 0 1.636 2.78l1.718 1.424zM43 32V6h-4v26z"
      clipRule="evenodd"
    />
  </svg>
);

SvgThumbDownFill.displayName = 'SvgThumbDownFill';

export default SvgThumbDownFill;
