import { useEffect, useState } from "react";
import Image from "next/image";

import { SingleProduct } from "types/singleProduct.types";
import { WishListIcon } from "public/assets/icons/WishList";
import { useWishlist } from "hooks/useWishlist";
import { useAuthStore } from "stores/AuthStore";
import { useWishlistStore } from "stores/WishlistStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductItemMainImage } from "@/types/global.types";
import useWindowSize from "@/hooks/useWindowSIze";

interface Props {
  product: SingleProduct;
}

export const Images = ({ product }: Props) => {
  //console.log(product);

  const { name, images } = product;
  const { user } = useAuthStore();
  const mainImage = images.find(({ main }) => main)?.large || "";

  const [activeImage, setActiveImage] = useState(mainImage);
  const [productImages, setProductImages] = useState(images);
  const [largeImage, setLargeImage] = useState("");
  const { items } = useWishlistStore();
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const isMobile = useWindowSize();

  const sticker = product.discount?.sticker;

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
    setProductImages(images);
  }, [product]);

  if (isMobile) {
    return (
      <div className="images">
        {sticker && (
          <div className="sticker">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker}`}
              alt={name}
              width={50}
              height={50}
            />
          </div>
        )}
        <Swiper slidesPerView={1}>
          {productImages.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={img.large}
                alt={name}
                fill
                onClick={() => setLargeImage(img.large)}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="catalogStickers">
          {product.catalog_stickers &&
            product.catalog_stickers
              .filter((s) => (s.sticker_active = 1))
              .map((sticker) => (
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker.sticker}`}
                  alt={product.name}
                  key={product.name}
                  width={50}
                  height={50}
                ></Image>
              ))}
        </div>
      </div>
    );
  }

  return (
    <div className="images">
      {largeImage !== "" && (
        <>
          <div className="backdrop" onClick={() => setLargeImage("")} />
          <div className="largeImage">
            <Image
              src={largeImage}
              alt={name}
              height={300}
              width={300}
              onClick={() => setLargeImage("")}
            ></Image>
          </div>
          <div className="otherImages">
            {images.map((img) => (
              <Image
                src={img.large}
                alt={name}
                fill
                onClick={() => setLargeImage(img.large)}
              ></Image>
            ))}
          </div>
        </>
      )}
      <div className="mainImg">
        <WishListIcon
          className="wishListIcon"
          isAddedToWishList={isAddedToWishList}
          onClick={isAddedToWishList ? removeFromWishList : addInWishList}
        />
        <div className="img">
          {sticker && (
            <div className="sticker">
              <Image
                src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker}`}
                alt={name}
                width={80}
                height={80}
              />
            </div>
          )}
          <div className="catalogStickers">
            {product.catalog_stickers &&
              product.catalog_stickers
                .filter((s) => (s.sticker_active = 1))
                .map((sticker) => (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/storage/${sticker.sticker}`}
                    alt={product.name}
                    key={product.name}
                    width={80}
                    height={80}
                  ></Image>
                ))}
          </div>
          {activeImage && (
            <Image
              src={activeImage}
              alt={name}
              height={390}
              width={390}
              priority
              quality={100}
              onClick={() => setLargeImage(activeImage)}
            />
          )}
        </div>
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1750: { slidesPerView: 3 },
          1400: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          700: { slidesPerView: 2 },
        }}
      >
        {productImages.map((img) => (
          <SwiperSlide key={img.id} onClick={() => setActiveImage(img.large)}>
            <Image src={img.large} alt={name} fill></Image>
          </SwiperSlide>
        ))}
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
