import React from 'react';
import { IconProps } from '../types';

const SvgToBottom: React.FC<IconProps> = ({
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
      d="M15.273 25H22V5h4v20h6.727c.87 0 1.325 1.034.737 1.676l-8.727 9.52a1 1 0 0 1-1.474 0l-8.727-9.52c-.588-.642-.133-1.676.737-1.676M5 39v4h38v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgToBottom.displayName = 'SvgToBottom';

export default SvgToBottom;
