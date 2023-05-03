import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
import Link from "next/link";
//import { BulbSucces } from "public/assets/icons/BulbSucces";
//import { seoData } from 'seo/seo.data';

const Thankyou = () => (
  <>
    {/* <NextSeo
      title={seoData.thankYouPage.title}
      description={seoData.thankYouPage.description}
    /> */}
    <Breadcrumb name="Uspešna kupovina" />
    <div className="thankyouPage">
      <div className="innerContainer">
        {/* <BulbSucces className="bulbSucces" /> */}
        <h3>Hvala Vam!</h3>
        <p>Čestitamo, uspešno ste izvršili kupovinu!</p>
        <Link href="/" className="btn-primary">
          Nazad u prodavnicu
        </Link>
      </div>
    </div>
  </>
);

export default Thankyou;
