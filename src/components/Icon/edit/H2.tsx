import React from 'react';
import { IconProps } from '../types';

const SvgH2: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M8 6H4v36h4V26h16v16h4V6h-4v16H8zm26 20c0-1.452 1.413-3 3-3 1.86 0 3 1.312 3 2.5 0 .488-.202 1.093-.627 1.81-.405.683-.907 1.295-1.37 1.86l-.045.056L30 38.777V42h14v-4h-8.147l5.19-6.227.005-.006.084-.103c.442-.539 1.116-1.362 1.68-2.312C43.41 28.348 44 27.012 44 25.5c0-3.783-3.337-6.5-7-6.5-3.936 0-7 3.481-7 7z"
      clipRule="evenodd"
    />
  </svg>
);

SvgH2.displayName = 'SvgH2';

export default SvgH2;
