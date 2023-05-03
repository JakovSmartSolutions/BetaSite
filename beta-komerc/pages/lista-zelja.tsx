import { CartItems } from "components/layout/cart/CartItems";
import { CartSummary } from "components/layout/cart/CartSummary";
import { EmptyCart } from "components/layout/cart/EmptyCart";
import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
//import { seoData } from 'seo/seo.data';
import { useWishlistStore } from "stores/WishlistStore";

const WishListPage = () => {
  const { items, totalPrice } = useWishlistStore();

  return (
    <>
      {/* <NextSeo
        title={seoData.wishListPage.title}
        description={seoData.wishListPage.description}
      /> */}
      <Breadcrumb name="Lista Želja" />
      <div className="cartPage">
        <div className="container">
          {items.length ? (
            <div>
              <h1 className="pageTitle">Lista Želja</h1>
              <div className="cartPageContent">
                <CartItems items={items} />
                <CartSummary totalPrice={totalPrice} />
              </div>
            </div>
          ) : (
            <EmptyCart message="Lista zelja je prazna." />
          )}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
