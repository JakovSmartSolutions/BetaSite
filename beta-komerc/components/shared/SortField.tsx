import { useState } from 'react';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { isActiveClass } from 'utils/activeClass';
import { Select } from './Select';

interface Props {
  activeSort: string;
  setActiveSort: React.Dispatch<React.SetStateAction<string>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  isSearchComponent?: boolean;
}

export const SortField = ({
  activeSort,
  setActiveSort,
  setActivePage,
  isSearchComponent,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      id: 1,
      label: 'Podrazumevano sortiranje',
      value: isSearchComponent ? '' : '',
    },
    {
      id: 2,
      label: 'Najnovije',
      value: isSearchComponent ? 'latest' : 'latest=1',
    },
    {
      id: 3,
      label: 'Sortiraj po ceni: od manje ka većoj',
      value: isSearchComponent ? 'asc' : 'price=asc',
    },
    {
      id: 4,
      label: 'Sortiraj po ceni: od veće ka manjoj',
      value: isSearchComponent ? 'desc' : 'price=desc',
    },
  ];

  return (
    <div className="sortField">
      <p>Sortiraj po:</p>
      <Select
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        options={
          <ul>
            {items.map((el) => (
              <li
                key={el.id}
                className={isActiveClass(activeSort === el.value)}
                onClick={() => {
                  setActiveSort(el.value);
                  setActivePage(1);
                  setIsOpen(false);
                }}
              >
                {el.label}
              </li>
            ))}
          </ul>
        }
      >
        <p>
          {items.find((el) => el.value === activeSort)?.label ||
            'Podrazumevano sortiranje'}
        </p>
        <DownArrowIcon />
      </Select>
    </div>
  );
};
