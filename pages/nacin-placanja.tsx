import { Breadcrumb } from "components/shared/Breadcrumb";
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

const MethodOfPaymentPage = () => (
  <>
    {/* <NextSeo
      title={seoData.methodOfPaymentPage.title}
      description={seoData.methodOfPaymentPage.description}
    /> */}
    <Breadcrumb name="Način plaćanja" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Način plaćanja</h1>
        <h2>Mogućnosti plaćanja u maloprodajnim objektima</h2>
        <div className="group">
          <h3>Gotovinski</h3>
          <p>
            Robu iz našeg širokog asortimana možete platiti gotovinom u nekom od
            Beta Komerc maloprodajnih objekata.
          </p>
        </div>
        <div className="group">
          <h3>Pouzećem (gotovinski)</h3>
          <p>
            Plaćanje pouzećem podrazumeva plaćanje robe poštaru ili kuriru
            prilikom preuzimanja.
          </p>
        </div>
        <div className="group">
          <h3>Nalogom za prenos (virmanski)</h3>
          <p>
            Ukoliko ste pravno lice ili korisnik elektronskog bankarstva
            (e-banking-a) uplatu možete izvršiti prenosom sredstava sa Vašeg
            računa. Uplatu na osnovu dostavljenog predračuna možete izvršiti
            nakon konsultacija sa našim komercijalistima putem e-bankinga ili
            uplatom u najbližoj pošti ili banci.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default MethodOfPaymentPage;
