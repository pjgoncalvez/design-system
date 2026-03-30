import React from 'react';
import { IconProps } from '../types';

const SvgMoonFill: React.FC<IconProps> = ({
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
      d="M42.108 29.769c.124-.387-.258-.736-.645-.613A18 18 0 0 1 36 30c-9.941 0-18-8.059-18-18 0-1.905.296-3.74.844-5.463.123-.387-.226-.769-.613-.645C10.558 8.334 5 15.518 5 24c0 10.493 8.507 19 19 19 8.482 0 15.666-5.558 18.108-13.231"
    />
  </svg>
);

SvgMoonFill.displayName = 'SvgMoonFill';

export default SvgMoonFill;
