import Image from "next/image";
import { Action } from "types/actions.types";
import { GenericProduct } from "types/global.types";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import useWindowSize from "hooks/useWindowSIze";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  action: Action;
  products: GenericProduct[];
}

export const ProductsSpecial = ({ action, products }: Props) => {
  const isMobileDevice = useWindowSize();
  return (
    <>
      {" "}
      <div className="productsSpecialTop">
        <h3>{action.name}</h3>
        <Link href={`/akcije/${action.id}`}>Pogledaj sve</Link>
      </div>
      <div className="productsSpecial">
        <div className="image">
          <Link href={`/akcije/${action.id}`}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.desktop_image}`}
              src={
                isMobileDevice
                  ? `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.mobile_image}`
                  : `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${action.desktop_image}`
              }
              alt={action.name}
              width={886}
              height={726}
            ></Image>
          </Link>
        </div>
        <div className="products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>{" "}
    </>
  );
};
