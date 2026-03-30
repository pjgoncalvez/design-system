import React from 'react';
import { IconProps } from '../types';

const SvgTranslate: React.FC<IconProps> = ({
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
      d="M4.099 23H.172L6 28.828 11.828 23H8.124C9.108 15.107 15.84 9 24 9c6.101 0 11.408 3.414 14.108 8.446l3.525-1.892C38.263 9.276 31.633 5 24 5 13.63 5 5.102 12.893 4.099 23m17.515-7h4.772l6.487 17.298-3.746 1.404L26.99 29h-5.978l-2.138 5.702-3.746-1.404zm.897 9h2.978L24 21.03zM42 21.172 47.828 27h-3.927C42.898 37.107 34.371 45 24 45c-7.633 0-14.263-4.276-17.633-10.554l3.525-1.892C12.592 37.586 17.899 41 24 41c8.16 0 14.892-6.107 15.876-14h-3.704z"
      clipRule="evenodd"
    />
  </svg>
);

SvgTranslate.displayName = 'SvgTranslate';

export default SvgTranslate;
