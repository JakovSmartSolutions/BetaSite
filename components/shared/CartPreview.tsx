import Image from 'next/image';
import Link from 'next/link';

import { EmptyCartIcon } from 'public/assets/icons/EmptyCart';
import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { CloseIcon } from 'public/assets/icons/CloseIcon';
import { isActiveClass } from 'utils/activeClass';
import { useCartStore } from 'stores/CartStore';
import { formatPrice } from 'utils/price';
import { useCart } from 'hooks/useCart';
import { useAuthStore } from 'stores/AuthStore';

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const CartPreview = ({ isOpen, close }: Props) => {
  const { items } = useCartStore();

  const { removeFromCart, updateItemInCart } = useCart();
  const { user } = useAuthStore();

  const onUpdate = (product_id: number, quantity: number) => {
    if (quantity === 0) return;
    updateItemInCart({ id: user?.id, product_id, quantity });
  };

  return (
    <div className={isActiveClass(isOpen, 'cartPreview')} onMouseLeave={close}>
      <div className="content">
        {items.length ? (
          <div className="itemsWrap">
            <div className="items">
              {items.map(({ product, quantity, price }) => (
                <div key={product.id} className="item">
                  <div className="photo">
                    {product.main_image && (
                      <Image
                        src={product.main_image.large}
                        alt={product.name}
                        width={52}
                        height={52}
                      />
                    )}
                  </div>
                  <div className="right">
                    <div className="info">
                      <h2>{product.name}</h2>
                      <div className="row">
                        <div className="counter">
                          <DownArrowIcon
                            onClick={() => onUpdate(product.id, quantity - 1)}
                          />
                          <p>{quantity}</p>
                          <DownArrowIcon
                            onClick={() => onUpdate(product.id, quantity + 1)}
                          />
                        </div>
                        <p>{formatPrice(price)}</p>
                      </div>
                    </div>
                    <CloseIcon
                      onClick={() =>
                        removeFromCart({ id: user?.id, product_id: product.id })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="buttons" onClick={close}>
              <Link href="/korpa" className="btn-primary light">
                Pregled korpe
              </Link>
              <Link href="/zavrsetak-kupovine" className="btn-primary">
                Završi kupovinu
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty">
            <EmptyCartIcon />
            <p>Tvoja korpa je prazna.</p>
            <Link href="/" className="btn-primary" onClick={close}>
              Pogledaj ponudu
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
