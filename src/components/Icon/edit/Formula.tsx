import React from 'react';
import { IconProps } from '../types';

const SvgFormula: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M7 9a3 3 0 0 1 3-3h30v4H12.037l13.449 11.768a3 3 0 0 1 .077 4.446l-.222.208L12.046 38H40v4H10a3 3 0 0 1-3-3v-.545a3 3 0 0 1 1.03-2.262L21.997 24.03 8.024 11.804A3 3 0 0 1 7 9.546z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFormula.displayName = 'SvgFormula';

export default SvgFormula;
