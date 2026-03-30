import React from 'react';
import { IconProps } from '../types';

const SvgFolderAdd: React.FC<IconProps> = ({
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
      d="M4 10c0-1.763 1.479-3 3.059-3h13.534c.97 0 1.92.455 2.51 1.284L25.033 11h14.85C42.046 11 44 12.685 44 15v21c0 1.01-.392 2.124-.925 2.976C42.6 39.732 41.55 41 39.882 41H8.118C5.953 41 4 39.315 4 37zm4 5v21.966a.2.2 0 0 0 .118.034h31.464q.045-.055.103-.147c.099-.159.186-.347.245-.53q.043-.136.058-.23A1 1 0 0 0 40 36V15.034a.2.2 0 0 0-.118-.034zm14 9v-5h4v5h5v4h-5v5h-4v-5h-5v-4z"
      clipRule="evenodd"
    />
  </svg>
);

SvgFolderAdd.displayName = 'SvgFolderAdd';

export default SvgFolderAdd;
