import Link from 'next/link';
import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { useState } from 'react';
import { Category } from 'types/categories.types';
import { isActiveClass } from 'utils/activeClass';

interface Props {
  categories: Category[];
  expandedCategoryId?: any;
  close: () => void;
  depth: number;
}

export const ExpendableCategories = ({
  categories,
  expandedCategoryId,
  close,
  depth,
}: Props) => {
  const [expandedCategory, setExpandedCategory] = useState<number | undefined>(
    expandedCategoryId
  );

  const handleExpand = (categoryId?: number) =>
    expandedCategory === categoryId
      ? setExpandedCategory(undefined)
      : setExpandedCategory(categoryId);

  const renderCategories = (categories: Category[]) => {
    return categories.map((category) => (
      <div key={category.id} className={`group root categoryContainer${depth}`}>
        <div
          className={isActiveClass(
            expandedCategory === category.id,
            'item root'
          )}
        >
          <Link href={`/kategorije/${category.slug}`} onClick={close}>
            {category.name}
          </Link>
          {category.subcategories.length ? (
            <span onClick={() => handleExpand(category.id)}>
              <DownArrowIcon
                className={isActiveClass(expandedCategory === category.id)}
              />
            </span>
          ) : null}
        </div>

        {expandedCategory === category.id &&
          category.subcategories.length > 0 && (
            <ExpendableCategories
              categories={category.subcategories}
              expandedCategoryId={expandedCategory}
              close={close}
              depth={depth + 1}
            />
          )}
      </div>
    ));
  };

  return <div>{renderCategories(categories)}</div>;
};
