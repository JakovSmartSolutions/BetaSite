import { useEffect } from "react";
import type { AppProps } from "next/app";

import { Header } from "components/shared/Header";
import { Footer } from "components/shared/Footer";
import { getStorageItem, setStorageItem } from "utils/storage";
import { handleAuth } from "hooks/handleAuth";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";

import { useCartStore } from "stores/CartStore";
import { useWishlistStore } from "stores/WishlistStore";
import { useAuthStore } from "stores/AuthStore";
import { getCart } from "api/cart";
import { getWishlist } from "api/wishlist";

const App = ({ Component, pageProps }: AppProps) => {
  const userId = getStorageItem("userId");
  const favoriteId = getStorageItem("favoriteId");
  const token = getStorageItem("token");

  const { fetchMe } = handleAuth();
  const { setCart } = useCartStore();
  const { setWishlist } = useWishlistStore();
  const { user } = useAuthStore();

  const { data: cart, refetch: refetchCart } = useQuery(
    "cart",
    () => getCart(user?.id),
    {
      enabled: user || userId ? true : false,
    }
  );
  const { data: wishlist, refetch: refetchWishlist } = useQuery(
    "wishlist",
    () => getWishlist(user?.id),
    {
      enabled: user || favoriteId ? true : false,
    }
  );

  useEffect(() => {
    if (token) fetchMe();
    if (!userId) setStorageItem("userId", uuidv4());
    if (!favoriteId) setStorageItem("favoriteId", uuidv4());
  }, []);

  useEffect(() => {
    if (cart) setCart(cart.data);
    if (wishlist) setWishlist(wishlist.data);
  }, [cart, wishlist]);

  useEffect(() => {
    if (user) {
      refetchCart();
      refetchWishlist();
    }
  }, [user]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
