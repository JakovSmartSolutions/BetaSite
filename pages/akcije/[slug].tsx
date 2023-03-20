import { ProductItem } from "types/global.types";

import { ProductsListsBlock } from "components/shared/ProductsListsBlock";
import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
//import { seoData } from 'seo/seo.data';

interface Props {
  products: ProductItem[];
}

const ActionPage = ({ products }: Props) => {
  console.log(products);
  return (
    <>
      {/* <NextSeo
      title={seoData.actionsPage.title}
      description={seoData.actionsPage.description}
    /> */}
      <Breadcrumb name="Akcije" />
      <div className="pageHolder">
        <div className="container">
          <h1 className="pageTitle">Odaberite proizvode na akciji</h1>
          <ProductsListsBlock products={products} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}catalog-stickers/${query.slug}`);
  const { data } = await res.json();

  return { props: { products: data } };
}

export default ActionPage;
