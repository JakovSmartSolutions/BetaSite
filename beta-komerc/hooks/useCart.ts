import { addCartItem, deleteCart, deleteItem, updateCartItem } from 'api/cart';
import { AddToCartPayload, DeletePayload } from 'api/cart/types';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useCartStore } from 'stores/CartStore';

export const useCart = () => {
  const { setCart, clearCart } = useCartStore();
  const { mutate: add } = useMutation(addCartItem);
  const { mutate: remove } = useMutation(deleteItem);
  const { mutate: update } = useMutation(updateCartItem);
  const { mutate: removeAll } = useMutation(deleteCart);

  const addToCart = (payload: AddToCartPayload) => {
    add(payload, {
      onSuccess: (resp) => {
        toast('Uspešno ste dodali proizvod u korpu!', { type: 'success' });
        setCart(resp);
      },
    });
  };

  const removeFromCart = (payload: DeletePayload) => {
    remove(payload, {
      onSuccess: (resp) => {
        toast('Uspešno ste izbacili proizvod iz korpe!', { type: 'success' });
        setCart(resp);
      },
    });
  };

  const updateItemInCart = (payload: AddToCartPayload) =>
    update(payload, { onSuccess: (resp) => setCart(resp) });

  const removeCart = (id?: number) =>
    removeAll(id, {
      onSuccess: () => {
        toast('Uspešno ste obrisali celu korpu!', {
          type: 'success',
        });
        clearCart();
      },
    });

  return { addToCart, removeFromCart, updateItemInCart, removeCart };
};
