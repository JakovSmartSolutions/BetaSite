//import { NextSeo } from 'next-seo';
import Link from "next/link";

import { Breadcrumb } from "components/shared/Breadcrumb";
//import { seoData } from 'seo/seo.data';

const ConsumerRightsPage = () => (
  <>
    {/* <NextSeo
      title={seoData.consumerRightsPage.title}
      description={seoData.consumerRightsPage.description}
    /> */}
    <Breadcrumb name="Prava potrošača" />
    <div className="readOnlyPage">
      <div className="container">
        <h1>Pravo kupca/potrošača na „odustanak od ugovora/kupovine“</h1>
        <p>
          Kupac/Potrošač po{" "}
          <b>
            Zakonu o zaštiti potrošača ima rok od 14 dana od preuzimanja robe da
            se predomisli i odustane od kupovine a da pritom ne mora ni da
            odgovori zašto.
          </b>{" "}
          Kupac/Potrošač robu može da vratiti <b>samo UZ FISKALNI RAČUN</b> i
          napisan razlog vraćanja (predomislio se, ne odgovara, neispravno
          primljeno ili bez ikakvog komentara ukoliko ne želi da komentariše
          razlog vraćanja). Ako kupac/potrošač u navedenom roku ne želi da
          zadrži robu, može da izjavi odustanak bez negativnih posledica,
          odnosno samo uz pokrivanje troškova vraćanja/transporta robe.
          Kupac/Potrošač snosi isključivo direktne troškove vraćanja robe, osim
          ako se trgovac saglasio sa tim da ih on snosi ili ako nije prethodno
          obavestio kupca/potrošača da je sam kupac/potrošač u obavezi da ih
          plati.{" "}
          <b>
            Trgovac nije odgovoran za oštećenja nastala usled neadekvatnog
            pakovanja robe i oštećenja u transportu robe (prilikom vraćanja) do
            mesta kupovine, tu odgovornost snosi sam kupac/potrošač.
          </b>
          Kupac/Potrošač je u obavezi da robu vrati u originalnu ambalažu uz
          obavezan fiskalni račun, a preporuka je da se napravi kopija fiskalnog
          računa i prateće dokumentacije. Kupac/Potrošač je isključivo odgovoran
          za umanjenu vrednost robe koja nastane kao posledica rukovanja robom
          na način koji nije adekvatan, odnosno prevazilazi ono što je neophodno
          da bi se ustanovili priroda, karakteristike i funkcionalnost robe.
          Trgovac <b>(Beta Komerc D.O.O.)</b> je u tom slučaju dužan da bez
          odlaganja izvrši povraćaj uplata koje je primio od potrošača,
          uključujući i troškove isporuke, a najkasnije u roku od 14 dana od
          dana kada je primio obrazac za odustanak. Osim toga, trgovac mora da
          mu, bilo elektronskom poštom ili na kućnu adresu, dostavi i obrazac za
          odustanak, a dužan je i da mu objasni svu proceduru. Pravilnik o
          obliku i sadržini obrasca, kao i sam obrazac možete pogledati i
          preuzeti sa sajta Ministarstva trgovine, turizma i telekomunikacija,
          sa sektora za zaštitu potrošača na ovom linku. Formular za raskid
          ugovora možete preuzeti sa ovog linka.{" "}
          <b>Potrošač nema pravo da odustane od ugovora/kupovine u slučaju:</b>
        </p>
        <ul>
          <li>
            pružanja usluga, nakon što je usluga u potpunosti izvršena, ako je
            pružanje usluge počelo nakon izričite prethodne saglasnosti
            potrošača i uz njegovu potvrdu da zna da gubi pravo na odustanak od
            ugovora kada trgovac u potpunosti izvrši ugovor
          </li>
          <li>
            isporuke robe proizvedene prema posebnim zahtevima potrošača ili
            jasno personalizovane
          </li>
          <li>
            isporuke robe koja je podložna pogoršanju kvaliteta ili ima kratak
            rok trajanja
          </li>
          <li>
            isporuke zapečaćene robe koja se ne može vratiti zbog zaštite
            osetljivih informacija (serijskih brojeva, aktivacionih kodova),
            zaštite zdravlja ili higijenskih razloga i koja je otpečaćena nakon
            isporuke.
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default ConsumerRightsPage;
