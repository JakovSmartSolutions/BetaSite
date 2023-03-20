import { SingleProduct } from "types/singleProduct.types";

import { Info } from "./Info";

interface Props {
  product: SingleProduct;
}

export const Details = ({ product }: Props) => (
  <div className="detailsBox">
    <Info product={product} />
  </div>
);
