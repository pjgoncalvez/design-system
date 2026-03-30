import React from 'react';
import { IconProps } from '../types';

const SvgUnderline: React.FC<IconProps> = ({
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
      d="M37 22.5c0 3.012-.68 6.187-2.804 8.626C32.026 33.618 28.65 35 24 35c-4.772 0-8.121-1.712-10.235-4.296C11.709 28.192 11 25.077 11 22.5V5h4v17.5c0 1.923.54 4.058 1.86 5.671C18.121 29.711 20.272 31 24 31c3.85 0 5.975-1.118 7.18-2.501C32.43 27.063 33 24.988 33 22.5V5h4zM39 43H9v-4h30z"
      clipRule="evenodd"
    />
  </svg>
);

SvgUnderline.displayName = 'SvgUnderline';

export default SvgUnderline;
