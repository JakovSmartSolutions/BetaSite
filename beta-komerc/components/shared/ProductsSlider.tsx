import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

import { GenericProduct, Subcategory } from "types/global.types";
import { isActiveClass } from "utils/activeClass";

import { ProductCard } from "./ProductCard";
import Link from "next/link";

interface Props {
  title: string;
  subs: Subcategory[];
  products: GenericProduct[];
  isPrimary?: boolean;
}

export const ProductsSlider = ({
  title,
  subs,
  products,
  isPrimary = false,
}: Props) => {
  let name1;
  let slug1;

  let name2;
  let slug2;

  let name3;
  let slug3;
  if (subs.length > 0) {
    name1 = subs[0].name;
    slug1 = subs[0].slug;

    name2 = subs[1].name;
    slug2 = subs[1].slug;

    name3 = subs[2].name;
    slug3 = subs[2].slug;
  }

  return (
    <>
      <div className="sectionContainer">
        <div className="sectionLeft">
          <h2 className="sectionTitle">{title}</h2>

          {subs.length > 0 && (
            <div className="links">
              <Link href={`/kategorije/${slug1}`}>{name1}</Link>
              <Link href={`/kategorije/${slug2}`}>{name2}</Link>
              <Link href={`/kategorije/${slug3}`}>{name3}</Link>
            </div>
          )}
        </div>
      </div>

      <div className={isActiveClass(isPrimary, "paper productsSlider")}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          breakpoints={{
            1750: { slidesPerView: 5 },
            1400: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            700: { slidesPerView: 2 },
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export const DynamicProductsSlider = dynamic(
  import("components/shared/ProductsSlider").then((e) => e.ProductsSlider),
  { ssr: false }
);
