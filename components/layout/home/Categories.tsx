import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { HomePageData } from "types/homePage.types";

interface Props {
  categories: HomePageData["categories"];
}

export const Categories = ({ categories }: Props) => (
  <div className="paper categoriesBlock">
    <h2>Kategorije</h2>
    <div className="sliderWrap">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop
        breakpoints={{
          1500: {
            slidesPerView: 7,
          },
          1300: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 4,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link href={`/kategorije/${category.slug}`} className="item">
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={80}
                />
              )}
              <p>{category.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
