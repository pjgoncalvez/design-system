import React from 'react';
import { IconProps } from '../types';

const SvgBranch: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M13 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-6a6 6 0 0 0-2 11.659V32.34a6 6 0 1 0 4 0v-2.336c.009-.035.057-.158.269-.382.322-.34.868-.745 1.69-1.214 1.265-.72 2.84-1.411 4.608-2.186q.849-.37 1.75-.772c2.373-1.062 4.952-2.303 6.945-3.859 1.837-1.434 3.462-3.364 3.706-5.922a6 6 0 1 0-4.04-.037c-.203.9-.858 1.815-2.128 2.806-1.569 1.225-3.74 2.297-6.117 3.36-.513.23-1.04.461-1.571.694-1.806.79-3.65 1.598-5.112 2.429v-9.263A6 6 0 0 0 15 4m1.998 26.016.002-.01zM32 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0M15 36a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      clipRule="evenodd"
    />
  </svg>
);

SvgBranch.displayName = 'SvgBranch';

export default SvgBranch;
