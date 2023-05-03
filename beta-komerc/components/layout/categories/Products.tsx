import { Pagination } from "components/shared/Pagination";
import { ProductCard } from "components/shared/ProductCard";
import { SortField } from "components/shared/SortField";
import { CategoryPageProductsResponse } from "types/categoriesPage.types";

interface Props {
  data: CategoryPageProductsResponse;
  activeSort: string;
  setActiveSort: React.Dispatch<React.SetStateAction<string>>;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export const Products = ({
  data,
  activeSort,
  setActivePage,
  setActiveSort,
}: Props) => (
  <div className="products">
    <SortField
      activeSort={activeSort}
      setActiveSort={setActiveSort}
      setActivePage={setActivePage}
    />
    <div className="productsGrid">
      {data.data.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
    <Pagination setActivePage={setActivePage} meta={data.meta} />
  </div>
);
