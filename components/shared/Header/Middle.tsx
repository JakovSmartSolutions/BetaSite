import { useState } from "react";
import { Category } from "types/categories.types";

import Image from "next/image";
import Link from "next/link";

import { Fade as Hamburger } from "hamburger-react";

import LogoImage from "public/assets/images/Logo.png";
import { SearchField } from "./SearchField";
import { AvatarIcon } from "public/assets/icons/Avatar";
import { CartIcon } from "public/assets/icons/Cart";
import { SearchIcon } from "public/assets/icons/Search";
import { WishListIcon } from "public/assets/icons/WishList";

import { useAuthStore } from "stores/AuthStore";
import { useCartStore } from "stores/CartStore";
import { useWishlistStore } from "stores/WishlistStore";
import useWindowSize from "hooks/useWindowSIze";
import { CartPreview } from "../CartPreview";
import { MobileCategories } from "./MobileCategories";
import { CategoriesIcon } from "@/public/assets/icons/Categories";
//import { CategoriesIcon } from "@/public/assets/icons/Categories";

interface Props {
  categories: Category[];
}

export const HeaderMiddle = ({ categories }: Props) => {
  const [isOpenCartPreview, setIsOpenCartPreview] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const { user } = useAuthStore();
  const { items: cart } = useCartStore();
  const { items: wishList } = useWishlistStore();
  const isMobileDevice = useWindowSize();

  return (
    <>
      <div className="headerMiddle">
        <div className="container">
          <div className="headerMiddle__content">
            <div className="left">
              <Hamburger
                color="#fff"
                toggled={isOpenCategories}
                size={18}
                onToggle={() => setIsOpenCategories((p) => !p)}
              />
              {/* <CategoriesIcon
                onClick={() => setIsOpenCategories(!isOpenCategories)}
              /> */}
              <Link href="/" className="logoLink">
                <Image
                  src={LogoImage}
                  alt="Beta Komerc"
                  priority
                  fill
                  sizes="(max-width: 1500px) 200px, (max-width: 1300px) 170px, (max-width: 1024px) 150px, 240px"
                />
              </Link>
              <SearchField
                isOpenMob={isOpenSearch}
                setIsOpenMob={setIsOpenSearch}
              />
            </div>

            <div className="links">
              {/* <div className="icon mob" onClick={() => setIsOpenSearch(true)}>
                <SearchIcon />
              </div> */}
              <Link href="/lista-zelja" className="icon">
                {wishList.length ? <span>{wishList.length}</span> : null}
                <WishListIcon />
                Lista želja
              </Link>
              <div
                className="cartIconHolder"
                onMouseEnter={() => setIsOpenCartPreview(true)}
                onMouseOver={() => setIsOpenCartPreview(true)}
                onMouseLeave={() => setIsOpenCartPreview(false)}
              >
                <Link href="/korpa" className="icon">
                  {cart.length ? <span>{cart.length}</span> : null}
                  <CartIcon />
                  Korpa
                </Link>
                <CartPreview
                  isOpen={isOpenCartPreview}
                  close={() => setIsOpenCartPreview(false)}
                />
              </div>
              <Link
                href={`/${user ? "moj-nalog/detalji-naloga" : "registracija"}`}
                className="icon"
              >
                <AvatarIcon />
                {user ? "Moj Profil" : "Registruj se / Prijavi se"}
              </Link>
            </div>
          </div>
          {isMobileDevice && (
            <SearchField
              isOpenMob={isOpenSearch}
              setIsOpenMob={setIsOpenSearch}
            />
          )}
        </div>
      </div>
      {isMobileDevice && isOpenCategories && (
        <MobileCategories
          categories={categories}
          close={() => setIsOpenCategories(false)}
        />
      )}
    </>
  );
};
