import { useEffect, useState } from "react";
import Image from "next/image";

import { SingleProduct } from "types/singleProduct.types";
import { WishListIcon } from "public/assets/icons/WishList";
import { useWishlist } from "hooks/useWishlist";
import { useAuthStore } from "stores/AuthStore";
import { useWishlistStore } from "stores/WishlistStore";
import { Swiper, SwiperSlide } from "swiper/react";
import LogoImage from "public/assets/images/Logo.png";

interface Props {
  product: SingleProduct;
}

export const Images = ({ product }: Props) => {
  const { name, images } = product;
  const { user } = useAuthStore();
  const mainImage = images.find(({ main }) => main)?.large || "";

  const [activeImage, setActiveImage] = useState(mainImage);
  const { items } = useWishlistStore();
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const isAddedToWishList = items.some(
    (item) => item.product.id === product.id
  );

  const addInWishList = (e: any) => {
    e.preventDefault();
    addToWishlist({
      product_id: product.id,
      quantity: 1,
      id: user?.id,
    });
  };

  const removeFromWishList = (e: any) => {
    e.preventDefault();
    removeFromWishlist({ product_id: product.id, id: user?.id });
  };

  useEffect(() => {
    setActiveImage(mainImage);
  }, [product]);

  return (
    <div className="images">
      <div className="mainImg">
        <WishListIcon
          className="wishListIcon"
          isAddedToWishList={isAddedToWishList}
          onClick={isAddedToWishList ? removeFromWishList : addInWishList}
        />
        <div className="img">
          {activeImage && (
            <Image src={activeImage} alt={name} fill priority quality={100} />
          )}
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image src={LogoImage} alt="logoImage" width={140}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={LogoImage} alt="logoImage" width={140}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={LogoImage} alt="logoImage" width={140}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={LogoImage} alt="logoImage" width={140}></Image>
        </SwiperSlide>
        ...
      </Swiper>

      {/* <div className="allImages">
        {images.map((img) => (
          <div
            key={img.id}
            className="item"
            onClick={() => setActiveImage(img.large)}
          >
            <div key={img.id} className="img">
              <Image src={img.large} alt={name} fill />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
