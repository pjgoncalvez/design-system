/**
 * Edit/Pen Icon Component
 * 24x24 edit icon from the design system
 */

import React from 'react';
import { Icon, IconProps } from './Icon';

export const IconEdit: React.FC<Omit<IconProps, 'children'>> = (props) => {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.799 3.89C16.97 2.719 18.87 2.719 20.041 3.89L20.627 4.476C21.798 5.647 21.798 7.547 20.627 8.718L9.177 20.168C8.7 20.646 8.075 20.948 7.405 21.027L4.358 21.735C2.484 21.954 0.875 20.41 1.017 18.529L1.495 14.218C1.549 13.503 1.858 12.831 2.365 12.324L15.799 3.89ZM14.307 9.038L18.479 13.21L20.091 11.597L15.92 7.426L14.307 9.038ZM15.65 16.038L11.479 11.867L4.456 14.89L4.097 19.621L8.594 19.094L15.65 16.038Z"
      />
    </Icon>
  );
};

IconEdit.displayName = 'IconEdit';
