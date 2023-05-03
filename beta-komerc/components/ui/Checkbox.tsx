import React from 'react';

import { isActiveClass } from 'utils/activeClass';
import { CheckIcon } from 'public/assets/icons/Check';

interface Props {
  isChecked: boolean;
  onClick?: () => void;
}

export const Checkbox = ({ isChecked, onClick }: Props) => (
  <div className={isActiveClass(isChecked, 'checkbox')} onClick={onClick}>
    <CheckIcon />
  </div>
);
