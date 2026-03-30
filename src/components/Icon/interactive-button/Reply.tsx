import React from 'react';
import { IconProps } from '../types';

const SvgReply: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M19.195 7.001C20.559 5.546 23 6.511 23 8.506V15c11.598 0 21 9.402 21 21q0 .248-.006.495c-.04 1.756-2.149 2.613-3.406 1.4A20.92 20.92 0 0 0 26 32q-1.53.001-3 .212v7.282c0 1.995-2.44 2.96-3.805 1.505L5.182 26.052a3 3 0 0 1 0-4.104zM19 13.057 8.741 24 19 34.942V28.94l1.567-.348A25 25 0 0 1 26 28c4.98 0 9.621 1.457 13.519 3.967C37.709 24.525 30.999 19 23 19q-.91 0-1.792.093L19 19.324z"
      clipRule="evenodd"
    />
  </svg>
);

SvgReply.displayName = 'SvgReply';

export default SvgReply;
