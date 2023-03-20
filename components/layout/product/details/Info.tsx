import { useProductPrice } from "hooks/useProductPrice";

import { SingleProduct } from "types/singleProduct.types";

import { formatPrice } from "utils/price";
import { Actions } from "./Actions";
import { HelpWithShopping } from "./HelpWithShopping";
import { Tabs } from "./tabs";

interface Props {
  product: SingleProduct;
}

export const Info = ({ product }: Props) => {
  const { getProductPrice } = useProductPrice();
  const { discount, authenticated_price, web_price, retail_price } = product;
  const price = getProductPrice({ discount, authenticated_price, web_price });
  const category = product.mainCategory?.[0] || null;

  console.log(product);

  let mainSpecContent;

  if (product.attributes.length > 0) {
    mainSpecContent = (
      <div className="mainSpec">
        <ul>
          <li>
            {product.attributes[0].attribute.name}
            {": "}
            {product.attributes[0].value.value}
          </li>
          <li>
            {product.attributes[1].attribute.name}
            {": "}
            {product.attributes[1].value.value}
          </li>
          <li>
            {product.attributes[2].attribute.name}
            {": "}
            {product.attributes[2].value.value}
          </li>
          <li>
            {product.attributes[3].attribute.name}
            {": "}
            {product.attributes[3].value.value}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="productInfo">
      <div className="productInfoChild">
        <div className="infoPart">
          <div className="left">
            <div className="row">
              <p>
                Kategorija: <span>{category?.name}</span>
              </p>
              <p>
                Šifra proizvoda: <span>{product.sku}</span>
              </p>
            </div>
            <h1>{product.name}</h1>
            <div className="badges">
              <p>Besplatna dostava</p>
              <p>Poslednji komadi</p>
            </div>
          </div>
        </div>
        <div className="productDetails">
          <div className="left">
            {product.attributes.length > 0 && mainSpecContent}
            {product.energy_value_sticker && (
              <div className="badgeSpec">
                <p>Energetska klasa: F</p>
              </div>
            )}

            <div className="prices">
              <p className="lineThrough">{formatPrice(retail_price)}</p>
              <h2>{formatPrice(price)}</h2>
              <p className="saving">
                Ušteda: {formatPrice(retail_price - price)}
              </p>
            </div>
            <Actions product={product} />
          </div>
          <div className="right">
            <HelpWithShopping />
          </div>
        </div>
      </div>
      {product.attributes.length > 0 && (
        <div className="attributes">
          <div className="name">{product.attributes[0].attribute.name}</div>
          <div className="name">{product.attributes[1].attribute.name}</div>
          <div className="name">{product.attributes[2].attribute.name}</div>
          <div className="name">{product.attributes[3].attribute.name}</div>
          <div className="value">{product.attributes[0].value.value}</div>
          <div className="value">{product.attributes[1].value.value}</div>
          <div className="value">{product.attributes[2].value.value}</div>
          <div className="value">{product.attributes[3].value.value}</div>
        </div>
      )}

      <Tabs product={product} />
    </div>
  );
};
