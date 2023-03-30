import { HomePageData } from "types/homePage.types";
import { Banner } from "types/banner.types";
import dynamic from "next/dynamic";

import { HeroBanner } from "components/layout/home/HeroBanner";
import { Newsletter } from "components/shared/Newsletter";
import { Servis } from "components/shared/Servis";
import { Cards } from "components/layout/home/Cards";
import { DynamicProductsSlider } from "components/shared/ProductsSlider";
//import { BannersSlider } from "components/layout/home/BannersSlider";
import Link from "next/link";
import Image from "next/image";
//import BannerImage from "public/assets/images/Banner2.png";
//import AmdImage from "public/assets/images/Banner3.png";
//import IntelImage from "public/assets/images/Banner4.png";

interface Props {
  data: HomePageData;
  banners: Banner[];
}

const Categories = dynamic(
  () => import("components/layout/home/Categories").then((e) => e.Categories),
  { ssr: false }
);

export default function Home({ data, banners }: Props) {
  const laneBanner = banners.filter(
    (banner) => banner.position.name == "Traka na početnoj"
  );

  return (
    <>
      <main className="homePage">
        <div className="container">
          {banners.length > 0 && <HeroBanner banners={banners} />}

          <Cards />
          <DynamicProductsSlider
            title="Preporuka meseca"
            products={data.products}
            subs={[]}
          />
          <Categories categories={data.categories} />

          <DynamicProductsSlider
            key={data.sections[0].id}
            title={data.sections[0].name}
            subs={data.sections[0].categories}
            products={data.sections[0].products}
          />
          {laneBanner.length > 0 && (
            <div className="bannersSlider">
              <Link href={laneBanner[0].link || ""} className="bannerItem">
                <Image src={laneBanner[0].desktop_image} alt="Banner" fill />
              </Link>
            </div>
          )}

          {data.sections[1] && (
            <DynamicProductsSlider
              key={data.sections[1].id}
              title={data.sections[1].name}
              subs={data.sections[1].categories}
              products={data.sections[1].products}
            />
          )}

          {/* <div className="bannerAmdIntel">
            <div className="bannerAmd">
              <button>POGLEDAJ PONUDU</button>
            </div>
            <div className="bannerIntel">
              <button>POGLEDAJ PONUDU</button>
            </div>
          </div> */}
          {data.sections.slice(2, data.sections.length).map((section) => (
            <DynamicProductsSlider
              key={section.id}
              title={section.name}
              subs={section.categories}
              products={section.products}
            />
          ))}

          <div className="servisNews">
            <Servis />
            <Newsletter />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const data = await fetch(`${baseURL}home-page/web`);
  const banners = await fetch(`${baseURL}banners?paginate=10`);
  const { data: dataRes } = await data.json();
  const { data: bannersRes } = await banners.json();

  return {
    props: {
      data: dataRes,
      banners: bannersRes,
    },
  };
}
