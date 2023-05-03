import { CartIcon } from "@/public/assets/icons/Cart";
import { ShoppingBagIcon } from "@/public/assets/icons/ShoppingBag";
import { useCart } from "hooks/useCart";
import { useProductPrice } from "hooks/useProductPrice";
import { useWishlist } from "hooks/useWishlist";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { WishListIcon } from "public/assets/icons/WishList";
import { useAuthStore } from "stores/AuthStore";
import { useCartStore } from "stores/CartStore";
import { useWishlistStore } from "stores/WishlistStore";
import { Attribute, GenericProduct } from "types/global.types";
import { formatPrice } from "utils/price";

interface Props {
  product: GenericProduct;
}

export const ProductCard = ({ product }: Props) => {
  console.log(product);
  const { name, main_image } = product;

  const title = name.length > 40 ? `${name.slice(0, 40)}...` : name;
  const { user } = useAuthStore();
  const { items: cartItems } = useCartStore();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const { items } = useWishlistStore();
  const { getProductPrice } = useProductPrice();
  const { push } = useRouter();
  const price = getProductPrice(product);
  const sticker = product.discount?.sticker;
  const isAddedToWishList = items.some(
    (item) => item.product.id === product.id
  );
  const badgeText = product.catalog_stickers?.[0]?.label_text || null;
  const isInCart = cartItems.some((item) => item.product.id === product.id);

  const addInWishList = (e: any) => {
    e.preventDefault();
    addToWishlist({
      product_id: product.id,
      quantity: 1,
      id: user?.id,
    });
  };

  const removeFromWishList = (e: any) => {
    e.preventDefault();
    removeFromWishlist({ product_id: product.id, id: user?.id });
  };

  return (
    <Link href={`/proizvod/${product.slug}`} className="productCard">
      <div className="top">
        {sticker && (
          <div className="sticker">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker}`}
              alt={title}
              width={40}
              height={40}
            />
          </div>
        )}
        <WishListIcon
          className="heartIcon"
          isAddedToWishList={isAddedToWishList}
          onClick={isAddedToWishList ? removeFromWishList : addInWishList}
        />
        <div className="catalogStickers">
          {product.catalog_stickers &&
            product.catalog_stickers
              .filter((s) => (s.sticker_active = 1))
              .map((sticker) => (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker.sticker}`}
                  alt={product.name}
                  width={50}
                  height={50}
                ></Image>
              ))}
        </div>
        <div className="photo">
          {main_image && (
            <Image
              src={main_image.large}
              alt={title}
              width={190}
              height={190}
            />
          )}
        </div>
        <h2 title={name}>{title}</h2>
      </div>

      <div className="bottom">
        <div className="badgeHolder">
          {badgeText && (
            <div className="badge primary" title={badgeText}>
              {badgeText.length > 30
                ? `${badgeText.slice(0, 30)}...`
                : badgeText}
            </div>
          )}
        </div>
        {product.attributes && (
          <div className="specs">
            <ul>
              {product.attributes.map((a) => (
                <li>
                  {a.attribute.name}: {a.value.value}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.valuable_attributes &&
          product.valuable_attributes.length > 0 && (
            <div className="specs">
              <ul>
                {product.valuable_attributes.slice(0, 4).map((attribute) => (
                  <li key={attribute.attribute.name}>
                    {attribute.attribute.name}: {attribute.value.value}{" "}
                  </li>
                ))}
                {/* <li>
                  {product.valuable_attributes[0].attribute.name}:{" "}
                  {product.valuable_attributes[0].value.value}
                </li> */}
                {/* <li>
                  {product.valuable_attributes[1].attribute.name}:{" "}
                  {product.valuable_attributes[1].value.value}
                </li>
                <li>
                  {product.valuable_attributes[2].attribute.name}:{" "}
                  {product.valuable_attributes[2].value.value}
                </li>
                <li>
                  {product.valuable_attributes[3].attribute.name}:{" "}
                  {product.valuable_attributes[3].value.value}
                </li> */}
              </ul>
            </div>
          )}
        {/* {!product.attributes && !product.valuable_attributes && product.valuable_attributes.length < 1 && ( */}
        {!product.attributes && !product.valuable_attributes && (
          <div className="specs"></div>
        )}

        <div className="prices">
          <p>{formatPrice(product.retail_price)}</p>
          <h3>{formatPrice(price)}</h3>
          <p className="saving">
            Ušteda: {formatPrice(product.retail_price - price)}
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (isInCart) return push("/zavrsetak-kupovine");
            addToCart({ product_id: product.id, quantity: 1, id: user?.id });
            setTimeout(() => push("/zavrsetak-kupovine"), 1000);
          }}
        >
          <CartIcon />
          Kupi odmah
        </button>
        <button
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (isInCart) return push("/korpa");
            addToCart({ product_id: product.id, quantity: 1, id: user?.id });
          }}
        >
          <ShoppingBagIcon />
          {isInCart ? "Dodat u korpu" : "Dodaj u korpu"}
        </button>
      </div>
    </Link>
  );
};
