import React from 'react';
import { IconProps } from '../types';

const SvgThumbUpFill: React.FC<IconProps> = ({
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
      d="M28.975 4.971a3 3 0 0 0-4.158.586L16.015 17H12v26h23.269a3 3 0 0 0 2.859-2.09l5.949-18.698c.82-2.58-1.105-5.212-3.812-5.212l-10.22.058.323-.844c.164-.43.366-.878.598-1.397l.23-.517c.312-.703.658-1.514.898-2.33.236-.8.423-1.77.281-2.761a4.16 4.16 0 0 0-1.636-2.78L29.02 5.005zM5 17v26h4V17z"
      clipRule="evenodd"
    />
  </svg>
);

SvgThumbUpFill.displayName = 'SvgThumbUpFill';

export default SvgThumbUpFill;
