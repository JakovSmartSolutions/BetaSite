import { useRef } from 'react';

import { isActiveClass } from 'utils/activeClass';
import useOutsideClick from 'hooks/useOutsideClick';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  options: any;
  className?: string;
}

export const Select = ({
  isOpen,
  setIsOpen,
  children,
  options,
  className,
}: Props) => {
  const classes = className ? `select ${className}` : 'select';
  const ref = useRef(null);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div className={isActiveClass(isOpen, classes)}>
      <div className="selectPreview" onMouseDown={handleClick}>
        {children}
      </div>
      <div className="selectOptions" ref={ref}>
        {options}
      </div>
    </div>
  );
};
