import React from 'react';
import { IconProps } from '../types';

const SvgStrikethrough: React.FC<IconProps> = ({
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
      d="M24 5c-3.152 0-6.083.956-8.271 2.597S12 11.658 12 14.5c0 1.415.6 2.833 1.245 3.944.67 1.152 1.544 2.238 2.4 3.027l2.71-2.942c-.545-.502-1.171-1.269-1.651-2.095-.505-.868-.704-1.555-.704-1.934 0-1.3.698-2.63 2.129-3.703C19.56 9.723 21.629 9 24 9c2.37 0 4.44.723 5.871 1.797C31.301 11.87 32 13.2 32 14.5h4c0-2.842-1.54-5.262-3.729-6.903S27.152 5 24 5m8.5 18.805H5v4h27.076C33.637 28.592 34 30.142 34 31.5c0 3.802-3.879 7.5-9.5 7.5-5.775 0-9.5-3.32-9.5-7h-4c0 6.814 6.572 11 13.5 11C31.581 43 38 38.192 38 31.5c0-.94-.134-2.324-.727-3.695H43v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgStrikethrough.displayName = 'SvgStrikethrough';

export default SvgStrikethrough;
