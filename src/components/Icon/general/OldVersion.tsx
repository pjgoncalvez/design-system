import React from 'react';
import { IconProps } from '../types';

const SvgOldVersion: React.FC<IconProps> = ({
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
      d="M4 8a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm4 1v24h32V9zm28 34H12v-4h24zM23.686 25.945l-2.938-2.962 13.243.053.016-4-13.243-.053 2.962-2.938-2.817-2.84-7.81 7.748 7.747 7.809z"
      clipRule="evenodd"
    />
  </svg>
);

SvgOldVersion.displayName = 'SvgOldVersion';

export default SvgOldVersion;
