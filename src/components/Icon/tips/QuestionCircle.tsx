import React from 'react';
import { IconProps } from '../types';

const SvgQuestionCircle: React.FC<IconProps> = ({
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
      d="M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16S8 32.837 8 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m-3.4 15.979v-.462a2.37 2.37 0 0 1 .636-1.615c.405-.422 1.193-.902 2.752-.902 1.465 0 2.483.7 3.003 1.493.554.848.445 1.559.182 1.914-.329.444-.736.853-1.229 1.296-.15.135-.334.296-.532.468-.355.308-.751.654-1.068.955C23.221 24.195 22 25.686 22 28l.007 1.013 4-.026-.007-.992c.002-.684.282-1.192 1.102-1.971.275-.262.522-.477.806-.722.21-.18.438-.379.712-.626.57-.513 1.206-1.13 1.767-1.888 1.516-2.047 1.162-4.634-.05-6.485C29.093 14.398 26.826 13 23.989 13c-2.454 0-4.357.794-5.642 2.137-1.25 1.307-1.741 2.954-1.746 4.37v.472zM22.007 31v4.008h4V31z"
      clipRule="evenodd"
    />
  </svg>
);

SvgQuestionCircle.displayName = 'SvgQuestionCircle';

export default SvgQuestionCircle;
