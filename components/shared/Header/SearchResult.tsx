import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { GenericProduct } from "types/global.types";

import { GoToProductIcon } from "public/assets/icons/GoToProduct";
import { useProductPrice } from "hooks/useProductPrice";
import { formatPrice } from "utils/price";

interface Props {
  data: GenericProduct[];
  clearInput: () => void;
}

export const SearchResult = ({ data, clearInput }: Props) => {
  const { getProductPrice } = useProductPrice();
  const ref = useRef<HTMLDivElement>(null);

  const price = (el: GenericProduct) =>
    getProductPrice({
      authenticated_price: el.authenticated_price,
      web_price: el.web_price,
      discount: el.discount,
    });

  return (
    <>
      <div className="searchResultInputMask" onClick={clearInput} />
      <div
        className="searchResultInput"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        {data.length ? (
          <>
            {data.map((el) => {
              return (
                <Link
                  href={`/proizvod/${el.slug}`}
                  className="productRow"
                  onClick={clearInput}
                  key={el.id}
                >
                  <div className="photo">
                    {el.main_image && (
                      <Image
                        src={el.main_image?.large}
                        alt={el.name}
                        width={52}
                        height={52}
                      />
                    )}
                  </div>
                  <div className="info">
                    <h2>{el.name}</h2>
                    {/* <p>420</p> */}
                    <p>{formatPrice(price(el))}</p>
                  </div>
                  <GoToProductIcon />
                </Link>
              );
            })}
          </>
        ) : (
          <p className="noResult">Nema rezultata pretrage</p>
        )}
      </div>
    </>
  );
};
