import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Banner } from "types/banner.types";

import { DownArrowIcon } from "public/assets/icons/DownArrow";

interface Props {
  banners: Banner[];
}

export const BannersSlider = ({ banners }: Props) => {
  const data = banners.filter(
    ({ position: p }) => p.name === "Traka na početnoj"
  );

  return (
    <div className="bannersSlider">
      <div className="sliderWrap">
        {data.length > 1 ? (
          <>
            <Swiper
              slidesPerView={1.3}
              spaceBetween={20}
              speed={300}
              loop
              breakpoints={{ 1024: { spaceBetween: 60 } }}
            >
              {data.map((el) => (
                <SwiperSlide key={el.id}>
                  <Item el={data[0]} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev">
              <DownArrowIcon />
            </div>
            <div className="swiper-button-next">
              <DownArrowIcon />
            </div>
          </>
        ) : (
          <Item el={data[0]} />
        )}
      </div>
    </div>
  );
};

interface ItemProps {
  el: Banner;
}

const Item = ({ el }: ItemProps) => (
  <Link href={el.link || " "} className="bannerItem">
    <Image
      src={
        typeof window !== "undefined" && window.innerWidth < 1024
          ? el.mobile_image
          : el.desktop_image
      }
      alt={el.name}
      fill
    />
  </Link>
);
