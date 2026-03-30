import React from 'react';
import { IconProps } from '../types';

const SvgThumbDown: React.FC<IconProps> = ({
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
      d="M13.462 9 7.735 27h12.172L17.5 33.29a4 4 0 0 0 1.362 4.65l1.748 1.288L30.015 27H32V9zm-3.59-1.91A3 3 0 0 1 12.732 5H36v26h-4.015l-8.802 11.443a3 3 0 0 1-4.158.586l-2.536-1.87a8 8 0 0 1-2.725-9.298l.33-.861H7.734c-2.707 0-4.632-2.633-3.812-5.213zM43 5v26h-4V5z"
      clipRule="evenodd"
    />
  </svg>
);

SvgThumbDown.displayName = 'SvgThumbDown';

export default SvgThumbDown;
