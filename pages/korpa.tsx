import { CartItems } from "components/layout/cart/CartItems";
import { CartSummary } from "components/layout/cart/CartSummary";
import { EmptyCart } from "components/layout/cart/EmptyCart";
import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
//import { seoData } from 'seo/seo.data';
import { useCartStore } from "stores/CartStore";

const WishListPage = () => {
  const { items, totalPrice } = useCartStore();

  return (
    <>
      {/* <NextSeo
        title={seoData.cartPage.title}
        description={seoData.cartPage.description}
      /> */}
      <Breadcrumb name="Korpa" />
      <div className="cartPage">
        <div className="container">
          {items.length ? (
            <div>
              <h1 className="pageTitle">Korpa</h1>
              <div className="cartPageContent">
                <CartItems items={items} isCart />
                <CartSummary totalPrice={totalPrice} isCart />
              </div>
            </div>
          ) : (
            <EmptyCart message="Korpa je prazna." />
          )}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
