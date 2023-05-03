import { Breadcrumb } from "components/shared/Breadcrumb";
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

const WayOfDeliveryPage = () => (
  <>
    {/* <NextSeo
      title={seoData.wayOfDeliveryPage.title}
      description={seoData.wayOfDeliveryPage.description}
    /> */}
    <Breadcrumb name="Način isporuke" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Način isporuke</h1>
        <p className="group">
          Beta Komerc isporuka na kućnu adresu funkcioniše vrlo jednostavno i
          efikasno:
        </p>
        <ul>
          <li>Naručite proivod online preko našeg Online Shop-a</li>
          <li>Platite avansno ili pouzećem</li>
          <li>
            U roku od jedan do dva dana, isporučićemo Vam kupljene proizvode, a
            cene isporuke su i više nego fer
          </li>
        </ul>
        <p className="group">
          Za narudžbine u vrednosti preko 5.000 dinara dobijate BESPLATNU
          ISPORUKU* na kućnu adresu!
        </p>
        <p className="group">
          Proizvodi se isključivo isporučuju putem akreditovanih i pouzdanih
          firmi koje rade isporuku paketa i vrednosnih pošiljki na teritoriji
          Srbije (DHL, Post Express, City Express itd), sa kojima Beta Komerc
          D.O.O. ima sklopljen Ugovor o saradnji. Što se tiče vremena isporuke,
          ono zavisi od toga kada je narudžbina izvršena, odnosno kada ste
          uplatili novac (ukoliko avansno plaćate naručene proizvode). Vreme
          isporuke je obicno 1-2 dana od dana uplate sredstava na naš žiro
          račun.
        </p>
        <p className="group">
          Ukoliko vam je potrebna brza isporuka, molimo vas da nam to naglasite
          prilikom narućivanja proizvoda.
        </p>
        <p className="group">Troškovi isporuke zavise od težine paketa.</p>
        <p className="group">
          <b>
            * Bela tehnika se ne isporučuje na adresu kupaca. Kupac sam
            organizuje preuzimanje u našem prodajnom objektu. Postoji mogućnost
            isporuke Beko bele tehnike na adresu kupca i cena iznosi 990,00 RSD.
          </b>
        </p>
      </div>
    </div>
  </>
);

export default WayOfDeliveryPage;
