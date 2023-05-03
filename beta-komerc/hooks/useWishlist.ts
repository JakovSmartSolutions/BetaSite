import {
  AddToCartPayload,
  DeletePayload,
  TransferFromWishlistPayload,
} from 'api/cart/types';
import {
  addWishlistItem,
  deleteWishlistItem,
  updateWishlistItem,
  transferToCart,
  transferAllToCart,
  deleteWishlist,
} from 'api/wishlist';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useCartStore } from 'stores/CartStore';
import { useWishlistStore } from 'stores/WishlistStore';

export const useWishlist = () => {
  const { setWishlist, clearWishlist } = useWishlistStore();
  const { setCart } = useCartStore();
  const { mutate: add } = useMutation(addWishlistItem);
  const { mutate: update } = useMutation(updateWishlistItem);
  const { mutate: remove } = useMutation(deleteWishlistItem);
  const { mutate: transfer } = useMutation(transferToCart);
  const { mutate: transferAll } = useMutation(transferAllToCart);
  const { mutate: removeAll } = useMutation(deleteWishlist);

  const addToWishlist = (payload: AddToCartPayload) =>
    add(payload, {
      onSuccess: (resp) => {
        toast('Uspešno ste dodali proizvod u listu želja!', {
          type: 'success',
        });
        setWishlist(resp);
      },
    });

  const updateItemInWishlist = (payload: AddToCartPayload) =>
    update(payload, {
      onSuccess: (resp) => setWishlist(resp),
    });

  const removeFromWishlist = (payload: DeletePayload) =>
    remove(payload, {
      onSuccess: (resp) => {
        toast('Uspešno ste izbacili proizvod iz liste želja!', {
          type: 'success',
        });
        setWishlist(resp);
      },
    });

  const transferInCart = (payload: TransferFromWishlistPayload) => {
    transfer(payload, {
      onSuccess: ({ cart, wishlist }) => {
        toast('Uspešno ste prebacili proizvod u korpu!', {
          type: 'success',
        });
        setCart(cart);
        setWishlist(wishlist);
      },
    });
  };

  const transferAllInCart = (id?: number) =>
    transferAll(id, {
      onSuccess: ({ cart, wishlist }) => {
        toast('Uspešno ste prebacili sve proizvode u korpu!', {
          type: 'success',
        });
        setCart(cart);
        setWishlist(wishlist);
      },
    });

  const removeWishlist = (id?: number) =>
    removeAll(id, {
      onSuccess: () => {
        toast('Uspešno ste obrisali celu listu želja!', {
          type: 'success',
        });
        clearWishlist();
      },
    });

  return {
    addToWishlist,
    removeFromWishlist,
    updateItemInWishlist,
    transferInCart,
    transferAllInCart,
    removeWishlist,
  };
};
