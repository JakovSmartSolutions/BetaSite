import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
import Image from "next/image";

import LogoImage from "public/assets/images/Logo.png";
//import { seoData } from 'seo/seo.data';

const AboutUsPage = () => (
  <>
    {/* <NextSeo
      title={seoData.aboutUs.title}
      description={seoData.aboutUs.description}
    /> */}
    <Breadcrumb name="O nama" />
    <div className="aboutUsPage">
      <div className="container">
        <h1>O nama</h1>
        <div className="banner">
          <Image src={LogoImage} alt="Beta Komerc" width={350} height={100} />
        </div>
        <div className="text">
          <p>
            Firma Beta Computer D.O.O. bavi se proizvodnjom i prodajom računara
            i računarske opreme, izradom kompjuterskih mrežnih instalacija,
            izradom i održavanjem desktop i web aplikacija, web dizajnom,
            obezbeđivanjem hardverske i softverske podrška za GPS praćenje
            vozila i od skora uvozom računarske periferije.Kupovinu u Beta
            Computeru možete izvršiti u:
          </p>
          <ul>
            <li>
              maloprodaji u Vranju – ul. Bore Stankovica 59, Vranje – Radno
              Vreme od 10-18h
            </li>
            <li>preko Online Shop-a na adresi www.betakomerc.rs</li>
          </ul>
          <p>
            Pored maloprodaje, aktivno je i odelenje veleprodaje, preko koga
            pravna lica mogu za dalju prodaju obezbediti sve proizvode koji se
            nalaze u ponudi Beta Computera-a, a koji predstavljaju renomirani
            proizvodi najvećih svetskih proizvodjača IT opreme.
          </p>
          <p>Usluge koje Beta Computer D.O.O. pruža svojim klijentima:</p>
          <ul>
            <li>Distribucija i prodaja računara i računarskih komponenti</li>
            <li>Distribucija i prodaja audio i video opreme</li>
            <li>Postavljanje mrežnih sistema</li>
            <li>Servisiranje računara i opreme</li>
            <li>Video nadzor</li>
            <li>GPS navigacija</li>
            <li>Web Hosting</li>
            <li>Kupovina domena</li>
            <li>Web Design</li>
          </ul>
          <p>
            Vlasnik ste maloprodaje računara i računarske opreme? Zelite da
            sarađujemo? Kontaktirajte nas, kako bi vam predlozili i obrazlozili
            uslove zasnivanja saradnje.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AboutUsPage;
