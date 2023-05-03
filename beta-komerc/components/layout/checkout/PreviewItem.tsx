import { CartItem } from 'api/cart/types';
import { useProductPrice } from 'hooks/useProductPrice';
import { formatPrice } from 'utils/price';

interface Props {
  item: CartItem;
}
const PreviewItem = ({ item }: Props) => {
  const { getProductPrice } = useProductPrice();
  const price = getProductPrice(item.product);

  return (
    <div className="previewItem">
      <p className="quantity">{item.quantity}X</p>
      <div className="info">
        <p>{item.product.name}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default PreviewItem;
