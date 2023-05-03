import { useState } from 'react';
import { useRouter } from 'next/router';

import { Attribute } from 'types/categories.types';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { isActiveClass } from 'utils/activeClass';
import { Checkbox } from 'components/ui/Checkbox';

interface Props {
  attributes: Attribute[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export const Attributes = ({
  attributes,
  activePage,
  setActivePage,
}: Props) => {
  const [expanded, setExpanded] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router: any = useRouter();

  const toggleSelect = (id: number) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const onSelect = (el: Attribute, val: Attribute['values'][0]) => {
    const key = el.attribute.name;
    const value = val.value.value;
    const { slug, ...rest } = router.query;
    const query: any = { ...rest };

    if (query[key]) {
      const values = query[key].split(',');
      if (values.includes(value)) {
        query[key] = values.filter((val: any) => val !== value).join(',');
        if (!query[key]) delete query[key];
      } else {
        query[key] = `${query[key]},${value}`;
      }
    } else {
      query[key] = value;
    }

    router.push({ pathname: `/kategorije/${router.query.slug}`, query });
    if (activePage !== 1) setActivePage(1);
  };

  const isValueSelected = (key: string, value: string) => {
    if (router.query[key]) {
      const values = router.query[key].split(',');
      return values.includes(value);
    }
    return false;
  };

  return (
    <>
      <div className={isActiveClass(isOpen, 'attributes')}>
        <h2>Filteri</h2>
        {attributes
          .filter((el) => el.values.length)
          .map((el) => (
            <div
              key={el.id}
              className={isActiveClass(expanded.includes(el.id), 'select')}
            >
              <div
                className="selectPreview"
                onClick={() => toggleSelect(el.id)}
              >
                <p>{el.attribute.name}</p>
                <DownArrowIcon />
              </div>
              <div className="selectOptions">
                {el.values.map((val) => (
                  <div
                    key={val.id}
                    className="valueItem"
                    onClick={() => onSelect(el, val)}
                  >
                    <Checkbox
                      isChecked={isValueSelected(
                        el.attribute.name,
                        val.value.value
                      )}
                    />
                    <p>{val.value.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <button
        className="btn-primary fixedBtn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? 'Zatvori' : 'Filteri'}
      </button>
    </>
  );
};
