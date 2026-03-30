import React from 'react';
import { IconProps } from '../types';

const SvgSunFill: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M21.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm0 32a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm21-16a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5zm-31.5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5zm28.203 13.46a.5.5 0 0 1 0 .707l-3.536 3.536a.5.5 0 0 1-.707 0l-3.535-3.536a.5.5 0 0 1 0-.707l3.535-3.535a.5.5 0 0 1 .707 0zM16.575 13.04a.5.5 0 0 0 0-.707L13.04 8.797a.5.5 0 0 0-.707 0l-3.536 3.536a.5.5 0 0 0 0 .707l3.536 3.535a.5.5 0 0 0 .707 0zM13.04 39.203a.5.5 0 0 1-.707 0l-3.536-3.536a.5.5 0 0 1 0-.707l3.536-3.535a.5.5 0 0 1 .707 0l3.536 3.535a.5.5 0 0 1 0 .707zm21.92-22.628a.5.5 0 0 0 .708 0l3.535-3.535a.5.5 0 0 0 0-.707l-3.535-3.536a.5.5 0 0 0-.708 0l-3.535 3.536a.5.5 0 0 0 0 .707zM24 33a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      clipRule="evenodd"
    />
  </svg>
);

SvgSunFill.displayName = 'SvgSunFill';

export default SvgSunFill;
