import orderBy from 'lodash/orderBy';

import { SingleProductAttribute } from 'types/singleProduct.types';

interface Props {
  attributes: SingleProductAttribute[];
}

export const Specifications = ({ attributes }: Props) => (
  <div className="specifications">
    {orderBy(attributes, 'order').map((attr) => (
      <div key={attr.attribute.id} className="specification">
        <span>{attr.attribute.name}</span>
        <p>{attr.value.value}</p>
      </div>
    ))}
  </div>
);
