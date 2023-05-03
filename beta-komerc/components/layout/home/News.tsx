import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DownArrowIcon } from 'public/assets/icons/DownArrow';
import { getNews } from 'api/news';

export const News = () => {
  const { data } = useQuery('news', getNews);

  return (
    <div className="newsBlock">
      <h2>Saveti pri izboru proizvoda</h2>
      <div className="sliderWrap">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={10}
          speed={300}
          modules={[Navigation]}
          loop
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            1500: {
              spaceBetween: 60,
              slidesPerView: 2.3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 2.3,
            },
          }}
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id}>
              <Link href={`/novosti/${el.id}`} className="newsSlide">
                <Image src={el.image} alt={el.title} fill />
                <p>{el.title}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev">
          <DownArrowIcon />
        </div>
        <div className="swiper-button-next">
          <DownArrowIcon />
        </div>
      </div>
    </div>
  );
};
