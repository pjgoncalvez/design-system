import React from 'react';
import { IconProps } from '../types';

const SvgQuote: React.FC<IconProps> = ({ size = 24, color = '#4E5969', className, ...props }) => (
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
      d="M9.997 18.09c-.982 2.441-1.527 5.232-1.791 7.929a8.56 8.56 0 0 1 3.874-.926 8 8 0 1 1-8 8.062c-.252-4.368-.008-11.055 2.207-16.559 1.12-2.785 2.799-5.398 5.302-7.203 2.544-1.835 5.768-2.71 9.703-2.289l-.426 3.978c-3.064-.329-5.278.359-6.937 1.555-1.7 1.226-2.99 3.113-3.932 5.453m21 0c-.982 2.441-1.527 5.232-1.791 7.929a8.56 8.56 0 0 1 3.874-.926 8 8 0 1 1-8 8.062c-.252-4.368-.008-11.055 2.207-16.559 1.12-2.785 2.799-5.398 5.302-7.203 2.544-1.835 5.768-2.71 9.703-2.289l-.426 3.978c-3.064-.329-5.278.359-6.937 1.555-1.7 1.226-2.99 3.113-3.932 5.453"
      clipRule="evenodd"
    />
  </svg>
);

SvgQuote.displayName = 'SvgQuote';

export default SvgQuote;
