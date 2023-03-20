import Link from "next/link";
import Image from "next/image";
import ServisImage from "public/assets/images/servis.png";

export const Servis = () => {
  return (
    <div className="servis">
      <div className="left">
        <div className="servisImage">
          <Image
            src={ServisImage}
            alt="servis"
            height={200}
            width={225}
          ></Image>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h2>Servis opreme</h2>
          <p>
            Beta Komerc Servis se već dugi niz godina brine da <br /> Vaš
            računar, laptop, tablet ili bilo koji drugi „pametni“ <br />
            uređaj ima odgovarajuću softversku podršku.
          </p>
        </div>
        <div className="servisLink">
          <Link href="/servis">Saznaj više</Link>
        </div>
      </div>
    </div>
  );
};
