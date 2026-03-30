import React from 'react';
import { IconProps } from '../types';

const SvgEdit: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M27.799 4.89a3 3 0 0 1 4.242 0l5.586 5.586a3 3 0 0 1 0 4.242l-20.45 20.45a3 3 0 0 1-1.772.859l-6.047.708a3 3 0 0 1-3.34-3.206l.477-6.31a3 3 0 0 1 .87-1.895zm-1.492 7.148 4.172 4.172 3.612-3.613-4.171-4.171zm1.343 7-4.171-4.171L10.456 27.89l-.358 4.73 4.496-.526zM42 44H6v-4h36z"
      clipRule="evenodd"
    />
  </svg>
);

SvgEdit.displayName = 'SvgEdit';

export default SvgEdit;
