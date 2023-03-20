import Image from 'next/image';
import Link from 'next/link';

import { Category } from 'types/categories.types';

interface Props {
  subcategories: Category['subcategories'];
}

export const CategoriesList = ({ subcategories }: Props) => (
  <div className="categoriesList">
    {subcategories?.map(({ id, image, name, slug }) => (
      <Link href={`/kategorije/${slug}`} key={id} className="item">
        <div className="img">
          {image && <Image src={image} alt={name} width={100} height={100} />}
        </div>
        <p>{name}</p>
      </Link>
    ))}
  </div>
);
