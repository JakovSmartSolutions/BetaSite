import { CartItem } from "api/cart/types";
import { useCart } from "hooks/useCart";
import { useWishlist } from "hooks/useWishlist";
import Image from "next/image";
import { useAuthStore } from "stores/AuthStore";
import { formatPrice } from "utils/price";

interface Props {
  items: CartItem[];
  isCart?: boolean;
}

export const CartItems = ({ items, isCart }: Props) => {
  const { user } = useAuthStore();
  const { removeFromCart, updateItemInCart } = useCart();

  const { removeFromWishlist, transferInCart } = useWishlist();

  const buttonText = isCart ? "korpe" : "liste želja";

  const removeWishlist = (item: CartItem) =>
    removeFromWishlist({
      id: user?.id,
      product_id: item.product.id,
    });

  const removeCart = (item: CartItem) =>
    removeFromCart({
      id: user?.id,
      product_id: item.product.id,
    });
  const onUpdate = (product_id: number, quantity: number) => {
    //if (quantity === 0) return;
    updateItemInCart({ id: user?.id, product_id, quantity });
  };

  return (
    <div className="cartItems">
      {items.map((item) => (
        <div key={item.product.id} className="cartItem">
          <div className="cartItemPhoto">
            {item.product.main_image && (
              <Image
                src={item.product.main_image.large}
                alt={item.product.name}
                width={190}
                height={190}
              />
            )}
          </div>
          <div className="cartItemBody">
            <div className="left">
              <h2>{item.product.name}</h2>
              <p>{formatPrice(item.price)}</p>
            </div>
            <div className="right">
              {!isCart && (
                <button
                  className="btn-primary"
                  onClick={() => {
                    transferInCart({
                      id: user?.id,
                      product_id: item.product.id,
                    });
                  }}
                >
                  Prebaci u korpu
                </button>
              )}
              <div className="counter">
                <p onClick={() => onUpdate(item.product.id, item.quantity - 1)}>
                  -
                </p>
                <p>{item.quantity}</p>
                <p onClick={() => onUpdate(item.product.id, item.quantity + 1)}>
                  +
                </p>
                {/* <DownArrowIcon onClick={() => onUpdate(item.product.id, 1)} /> */}
              </div>
              <button
                className="btn-primary disabled"
                onClick={
                  isCart ? () => removeCart(item) : () => removeWishlist(item)
                }
              >
                Izbaci iz {buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
