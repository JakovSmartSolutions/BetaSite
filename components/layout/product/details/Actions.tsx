import { useState } from "react";

import { SingleProduct } from "types/singleProduct.types";
import { useAuthStore } from "stores/AuthStore";
import { useCart } from "hooks/useCart";
import { useCartStore } from "@/stores/CartStore";
import { useRouter } from "next/router";

interface Props {
  product: SingleProduct;
}

export const Actions = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { push } = useRouter();
  const { user } = useAuthStore();
  const { addToCart } = useCart();
  const { items: cartItems } = useCartStore();
  const isInCart = cartItems.some((item) => item.product.id === product.id);

  const onDecrement = () => {
    if (quantity > 1) setQuantity((prev) => (prev < 1 ? prev : prev - 1));
  };

  const onIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="actionsRow">
      <div className="counterContainer">
        <label htmlFor="">Količina: </label>
        <div className="counter">
          <button onClick={onDecrement}>-</button>

          <p>{quantity}</p>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="btn-primary"
          onClick={(e) => {
            if (isInCart) return push("/zavrsetak-kupovine");
            addToCart({ product_id: product.id, quantity, id: user?.id });
            setTimeout(() => push("/zavrsetak-kupovine"), 1000);
          }}
        >
          Kupi odmah
        </button>
        <button
          className="btn-primary"
          onClick={() =>
            addToCart({ product_id: product.id, quantity, id: user?.id })
          }
        >
          Dodaj u korpu
        </button>
      </div>
    </div>
  );
};
