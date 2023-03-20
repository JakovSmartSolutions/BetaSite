import Link from 'next/link';
import React from 'react';
import { Category } from 'types/categories.types';
import { Breadcrumb } from './Breadcrumb';

interface Props {
  name?: string;
  categories: Category[];
}

export const CustomBreadCrumb = ({ name, categories }: Props) => {
  return (
    <Breadcrumb name={name}>
      {categories &&
        categories.length &&
        categories.map((item) => (
          <span key={item.id} className="breadcrumb_item">
            <Link href={`/kategorije/${item.slug}`}>{item.name}</Link>
            <span> / </span>
          </span>
        ))}
    </Breadcrumb>
  );
};
