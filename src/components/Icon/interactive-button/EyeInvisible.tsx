import React from 'react';
import { IconProps } from '../types';

const SvgEyeInvisible: React.FC<IconProps> = ({
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
      d="m33.232 36.31 6.501 6.501 2.828-2.828L30.07 27.49a7 7 0 0 0-9.56-9.56L8.267 5.688 5.438 8.517l5.735 5.734c-2.4 2.198-4.717 5.217-6.873 8.695L3.647 24l.653 1.054C9.83 33.972 16.36 39 24 39c3.25 0 6.335-.92 9.232-2.69m-2.93-2.93-3.136-3.135a7 7 0 0 1-9.41-9.41l-3.752-3.752c-1.832 1.647-3.739 3.996-5.635 6.915C13.384 31.665 18.625 35 24 35c2.147 0 4.242-.524 6.302-1.62m-6.381-6.381a3 3 0 0 1-2.92-2.92zm3.053-2.603a3 3 0 0 0-3.37-3.37zM23.936 9H24c7.64 0 14.171 5.028 19.7 13.946L44.353 24l-.653 1.054c-1.827 2.947-3.751 5.454-5.782 7.496l-2.836-2.82c1.54-1.549 3.058-3.454 4.547-5.73C34.615 16.334 29.375 13 24 13c-1.156 0-2.243.004-3.217.162-.982.158-1.58.434-1.922.769l-2.795-2.862c1.194-1.165 2.739-1.64 4.079-1.856C21.465 9 22.85 9 23.935 9"
      clipRule="evenodd"
    />
  </svg>
);

SvgEyeInvisible.displayName = 'SvgEyeInvisible';

export default SvgEyeInvisible;
