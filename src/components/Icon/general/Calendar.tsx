import React from 'react';
import { IconProps } from '../types';

const SvgCalendar: React.FC<IconProps> = ({
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
      d="M12 7V5h4v2h16V5h4v2h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3zm0 4H9v9h30v-9h-3v2h-4v-2H16v2h-4zm27 13H9v15h30z"
      clipRule="evenodd"
    />
  </svg>
);

SvgCalendar.displayName = 'SvgCalendar';

export default SvgCalendar;
