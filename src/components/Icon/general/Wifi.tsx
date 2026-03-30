import React from 'react';
import { IconProps } from '../types';

const SvgWifi: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M24 13c-7.155 0-13.605 3.003-18.165 7.823L2.93 18.074C8.213 12.49 15.7 9 24 9s15.787 3.489 21.07 9.074l-2.905 2.749C37.605 16.003 31.155 13 24 13M12.217 27.176A15.95 15.95 0 0 1 24 22c4.662 0 8.856 1.991 11.783 5.176l2.945-2.707A19.95 19.95 0 0 0 24 18a19.95 19.95 0 0 0-14.728 6.469zm5.713 5.612A7.98 7.98 0 0 1 24 30c2.427 0 4.6 1.078 6.07 2.788l3.033-2.607A11.98 11.98 0 0 0 24 26a11.98 11.98 0 0 0-9.103 4.18zm7.983 1.593c.607.25 1.158.62 1.622 1.084L24 39l-3.535-3.535a5 5 0 0 1 5.448-1.084"
      clipRule="evenodd"
    />
  </svg>
);

SvgWifi.displayName = 'SvgWifi';

export default SvgWifi;
