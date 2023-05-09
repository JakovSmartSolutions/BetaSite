import Image from "next/image";
import Link from "next/link";

import { Action } from "types/actions.types";

import { Newsletter } from "components/shared/Newsletter";
import { Breadcrumb } from "components/shared/Breadcrumb";
import useWindowSize from "@/hooks/useWindowSIze";
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

interface Props {
  data: Action[];
}

const Actions = ({ data }: Props) => {
  const isMobileDevice = useWindowSize();
  return (
    <>
      {/* <NextSeo
        title={seoData.actionsPage.title}
        description={seoData.actionsPage.description}
      /> */}
      <Breadcrumb name="Akcije" />
      <div className="actionsPage">
        <div className="container">
          <h1>Akcije</h1>
          <p>
            Odlične ponude i akcije u svako doba. <br />
            Na pravom ste mestu ako želite da uživate u online kupovini po
            akcijskim cenama.
          </p>
          <div className="cards">
            {data.map((item) => (
              <Link href={`/akcije/${item.id}`} key={item.id} className="card">
                <div className="img">
                  <Image
                    src={
                      isMobileDevice
                        ? `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${item.desktop_image}`
                        : `${process.env.NEXT_PUBLIC_SITE_URL}/storage/${item.desktop_image}`
                    }
                    alt={item.name}
                    //fill
                    width={400}
                    height={400}
                  />
                </div>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseURL}catalog-stickers`);
  const data = await res.json();

  return { props: { data: data?.data || [] } };
}
