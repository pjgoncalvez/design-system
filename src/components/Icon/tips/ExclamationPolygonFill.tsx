import React from 'react';
import { IconProps } from '../types';

const SvgExclamationPolygonFill: React.FC<IconProps> = ({
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
      d="M15.115 4h17.77L44 16.227v15.546L32.885 44h-17.77L4 31.773V16.227zM22 30v4h4v-4zm4-2V14h-4v14z"
      clipRule="evenodd"
    />
  </svg>
);

SvgExclamationPolygonFill.displayName = 'SvgExclamationPolygonFill';

export default SvgExclamationPolygonFill;
