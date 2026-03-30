import React from 'react';
import { IconProps } from '../types';

const SvgPlayArrowFill: React.FC<IconProps> = ({
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
      d="M17.533 10.974a1 1 0 0 0-1.537.844v24.356a1 1 0 0 0 1.537.844L36.67 24.84a1 1 0 0 0 0-1.688z"
    />
  </svg>
);

SvgPlayArrowFill.displayName = 'SvgPlayArrowFill';

export default SvgPlayArrowFill;
