import React from 'react';
import { IconProps } from '../types';

const SvgSkin: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M4 7a3 3 0 0 1 3-3h11.775l.588.598C20.51 5.765 22.27 7.058 24 7.058s3.49-1.293 4.637-2.46L29.226 4H41a3 3 0 0 1 3 3v17.559a3 3 0 0 1-3 3h-2V40a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3V27.559H7a3 3 0 0 1-3-3zm4 1v15.559h5V39h22V23.559h5V8h-9.131c-1.44 1.312-3.901 3.059-6.869 3.059S18.572 9.312 17.131 8z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSkin.displayName = 'SvgSkin';

export default SvgSkin;
