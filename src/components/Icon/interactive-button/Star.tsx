import React from 'react';
import { IconProps } from '../types';

const SvgStar: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M20.758 6.023c.917-1.858 3.567-1.858 4.484 0l4.67 9.463 10.443 1.518c2.05.298 2.87 2.818 1.386 4.264l-7.557 7.366 1.784 10.4c.35 2.043-1.793 3.6-3.628 2.636L23 36.76l-9.34 4.91c-1.835.965-3.978-.593-3.628-2.635l1.784-10.401-7.557-7.366c-1.483-1.446-.665-3.966 1.386-4.264l10.443-1.518zM23 10.52l-3.674 7.445a2.5 2.5 0 0 1-1.883 1.367l-8.215 1.194 5.945 5.795a2.5 2.5 0 0 1 .719 2.213l-1.404 8.182 7.349-3.863a2.5 2.5 0 0 1 2.326 0l7.349 3.863-1.404-8.182a2.5 2.5 0 0 1 .72-2.213l5.944-5.795-8.215-1.194a2.5 2.5 0 0 1-1.883-1.367z"
      clipRule="evenodd"
    />
  </svg>
);

SvgStar.displayName = 'SvgStar';

export default SvgStar;
