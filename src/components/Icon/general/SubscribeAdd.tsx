import React from 'react';
import { IconProps } from '../types';

const SvgSubscribeAdd: React.FC<IconProps> = ({
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
      d="M32.206 9.023V4h4v5.023H41v4h-4.794v5.023h-4v-5.023h-4.794v-4zM11 8.007h13.53v-4H9.97C8.269 4.007 7 5.414 7 7.01V41.8c0 1.535 1.641 2.76 3.2 1.955l14.297-7.39 13.338 7.377.025.013c1.558.805 3.199-.42 3.199-1.956V22.06h-4v16.683L24.56 31.83 11 38.839z"
      clipRule="evenodd"
    />
  </svg>
);

SvgSubscribeAdd.displayName = 'SvgSubscribeAdd';

export default SvgSubscribeAdd;
