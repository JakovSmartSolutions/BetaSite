import {
  ProductItem,
  SimilarProduct,
  RecommendedProduct,
} from 'types/global.types';

import { ProductCard } from './ProductCard';

interface Props {
  products: ProductItem[] | SimilarProduct[] | RecommendedProduct[];
}

export const ProductsListsBlock = ({ products }: Props) => (
  <div className="paper productsGrid">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);
