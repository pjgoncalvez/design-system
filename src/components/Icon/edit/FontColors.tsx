import React from 'react';
import { IconProps } from '../types';

const SvgFontColors: React.FC<IconProps> = ({
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
      d="M23 5h-1.311l-.523 1.201-6.533 15L13.415 24h.06l-3.823 9.235 3.696 1.53L17.804 24h12.39l4.458 10.765 3.696-1.53L34.524 24h.06l-1.219-2.799-6.532-15L26.31 5H23m5.48 15h-8.96L24 9.713zM9 43h30v-4H9z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFontColors.displayName = 'SvgFontColors';

export default SvgFontColors;
