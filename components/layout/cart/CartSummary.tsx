import { useCart } from 'hooks/useCart';
import { useWishlist } from 'hooks/useWishlist';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthStore } from 'stores/AuthStore';
import { formatPrice } from 'utils/price';

interface Props {
  totalPrice: number;
  isCart?: boolean;
}

export const CartSummary = ({ totalPrice, isCart }: Props) => {
  const { user } = useAuthStore();
  const { transferAllInCart, removeWishlist } = useWishlist();
  const { removeCart } = useCart();
  const { push } = useRouter();

  const buttonText = isCart ? 'Završite kupovinu' : 'Prebaci u korpu';
  const clearButtonText = isCart ? 'korpu' : 'listu želja';

  const onClickBtn = isCart
    ? () => push('/zavrsetak-kupovine')
    : () => transferAllInCart(user?.id);

  const onClickClear = isCart
    ? () => removeCart(user?.id)
    : () => removeWishlist(user?.id);

  return (
    <div className="cartSummary">
      <p>Ukupno</p>
      <h3>{formatPrice(totalPrice)}</h3>
      <div className="buttons">
        <button className="btn-primary" onClick={onClickBtn}>
          {buttonText}
        </button>

        <button className="btn-primary disabled" onClick={onClickClear}>
          Isprazni {clearButtonText}
        </button>

        <Link href="/">Nazad u prodavnicu</Link>
      </div>
    </div>
  );
};
