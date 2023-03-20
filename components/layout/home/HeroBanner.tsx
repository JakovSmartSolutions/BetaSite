import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Banner } from "types/banner.types";

interface Props {
  banners: Banner[];
}

export const HeroBanner = ({ banners }: Props) => (
  <div className="heroBanner">
    <Swiper
      speed={300}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      loop
      navigation
    >
      {banners
        .filter(({ position: p }) => p.name === "Slajder na početnoj strani")
        .map(({ id, name, desktop_image, mobile_image, link }, i) => (
          <SwiperSlide key={id}>
            <Link href={link} className="slideItemBanner">
              <Image
                src={
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? mobile_image
                    : desktop_image
                }
                alt={name}
                fill
                sizes="100%"
                priority={i === 0 ? true : false}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);
