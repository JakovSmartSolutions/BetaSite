import { Category } from 'types//categories.types';

export const IS_WINDOW_LOADED: boolean =
  typeof window !== 'undefined' ? true : false;

export const getCategoryBreadcrumbPath = (
  category: Category,
  productName?: string
): string => {
  const sufix = productName ? `/${productName}` : '';
  return !category.parent
    ? category.name
    : getCategoryBreadcrumbPath(category.parent, productName) +
        '/' +
        category.name +
        sufix;
};

export const formatBredcrumbString = (str: string) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(',', '');

export const allLettersUppercase = (str: string) =>
  str.replace(/\b[a-z]/gi, (letter) => letter.toUpperCase()).replace('-', ' ');
