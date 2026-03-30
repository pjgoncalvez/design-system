import React from 'react';
import { IconProps } from '../types';

const SvgDoubleRight: React.FC<IconProps> = ({
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
      d="m12.556 39.514-2.828-2.828 12.728-12.728L9.728 11.23 12.556 8.4l15.557 15.557zm11.314 0-2.828-2.828L33.77 23.958 21.042 11.23 23.87 8.4l15.556 15.557z"
      clipRule="evenodd"
    />
  </svg>
);

SvgDoubleRight.displayName = 'SvgDoubleRight';

export default SvgDoubleRight;
