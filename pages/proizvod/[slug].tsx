//import { NextSeo } from 'next-seo';

import { SingleProduct } from "types/singleProduct.types";

//import { seoData } from 'seo/seo.data';
import { Images } from "components/layout/product/Images";

import { Details } from "components/layout/product/details";
import { CustomBreadCrumb } from "components/shared/CustomBreadcrumb";
import { DynamicProductsSlider } from "components/shared/ProductsSlider";

interface Props {
  product: SingleProduct;
}

const ProductPage = ({ product }: Props) => {
  if (!product) return null;

  return (
    <>
      {/* <NextSeo
        title={(product.name || '') + ' | Constant Electric'}
        description={seoData.productPage.description}
        openGraph={{
          url: 'https://electric.co.rs/',
          title: product.name,
          description: seoData.productPage.description,
          images: product.images.map((el) => ({ url: el.small })),
          siteName: 'Constant Electric',
        }}
      /> */}
      <CustomBreadCrumb categories={product.categories} name={product.name} />
      <div className="productPage">
        <div className="container">
          <div className="contentGrid">
            <Images product={product} />
            <Details product={product} />
          </div>
          <DynamicProductsSlider
            title="Povezani proizvodi"
            subs={[]}
            products={product.similarProducts}
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const additionalParams = `categories,images,discount.type,mainCategory,approvedRatings,brand,supplier,answeredQuestions.user`;
  const url = `${baseURL}products/${query.slug}?include=${additionalParams}`;
  const res = await fetch(url);
  let product = null;

  try {
    const { data } = await res.json();
    product = data;
  } catch (error) {
    product = null;
  }

  return { props: { product } };
}

export default ProductPage;
