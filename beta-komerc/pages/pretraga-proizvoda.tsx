import { ProductsResponse } from "types/global.types";

import { Breadcrumb } from "components/shared/Breadcrumb";
import { ProductCard } from "components/shared/ProductCard";
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

interface Props {
  data: ProductsResponse;
}

const SearchPage = ({ data }: Props) => {
  console.log(data);
  return (
    <>
      {/* <NextSeo
      title={seoData.searchPage.title}
      description={seoData.searchPage.description}
    /> */}
      <Breadcrumb name="Pretraga" />
      <div className="searchResultPage">
        <div className="container">
          <h1 className="pageTitle">Pretraga</h1>
          <div className="paper">
            <div className="productsGrid">
              {data?.data?.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseURL}products?search=${query?.search || ""}&paginate=200`
  );
  const data = await res.json();

  return { props: { data } };
}

export default SearchPage;
