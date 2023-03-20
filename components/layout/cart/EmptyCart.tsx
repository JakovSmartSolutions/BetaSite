import Link from 'next/link';
import { EmptyCartIcon } from 'public/assets/icons/EmptyCart';

interface Props {
  message: string;
}

export const EmptyCart = ({ message }: Props) => (
  <div className="emptyCart">
    <EmptyCartIcon />
    <p>{message}</p>
    <Link href="/" className="btn-primary">
      Pogledaj ponudu
    </Link>
  </div>
);
