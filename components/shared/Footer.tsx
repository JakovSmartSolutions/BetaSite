import Image from "next/image";
import Link from "next/link";

import { CardsIcon } from "public/assets/icons/Cards";
import LogoImage from "public/assets/images/Logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          {/* <div className="logo">
            <Image
              src={LogoImage}
              alt="Beta Komerc"
              priority
              fill
              sizes="(max-width: 1500px) 200px, 240px"
            />
          </div> */}
          <div className="links">
            {links.map((group) => (
              <div key={group.id} className="column">
                <h2>{group.title}</h2>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="column">
              <h2>Potrebna vam je pomoć?</h2>
              <p>Call centar</p>
              <a href="tel: 017 400 106">017 400 106</a>
              <a href="tel: 064 823 8337">064 823 8337</a>
              <p>Email adresa</p>
              <a href="mailto: info@betakomerc.rs">info@betakomerc.rs</a>
              <p>Gde se nalazimo?</p>
              <p className="address">Bore Stankovića 59, 17000, Vranje</p>
            </div>
          </div>
        </div>
        <p className="middle">
          Uprkos pažljivoj kontroli kada je u potanju postavljanje i ažuriranje
          sadržaja na sajtu, moguća su eventualna odstupanja i greške, za koje
          ne preuzimamo <br /> odgovornost. Svi prikazani artikli na sajtu su
          deo naše ponude i ne mora da znači da su dostupni u svakom trenutku.
          Informacije o raspoliživosti artikala
          <br /> možete proveriti besplatnim pozivom našeg Korisničkog centra na
          017 400 106 ili na mail webshop@betakomerc.rs.
        </p>
        <div className="bottom">
          <div className="left">
            <p>Copyright © 2023 Beta Komerc D.O.O.</p>
            <p>
              Powered by{" "}
              <a target="_blank" href="https://jakovsmartsolutions.com/">
                Jakov Smart Solutions
              </a>
            </p>
          </div>
          <div className="right">
            <CardsIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

const links = [
  {
    id: 1,
    title: "Podrška",
    links: [
      { href: "/korisnicka-podrska", label: "Korisnička podrška" },
      { href: "/reklamacije", label: "Reklamacije i povrati" },
      // { href: "/kako-naruciti", label: "Kako naručiti" },
      //{ href: "/najcesca-pitanja", label: "Najčešća pitanja" },
    ],
  },
  {
    id: 2,
    title: "Plaćanje i isporuka",
    links: [
      { href: "/nacin-placanja", label: "Način plaćanja" },
      { href: "/nacin-isporuke", label: "Način isporuke" },
    ],
  },
  {
    id: 3,
    title: "Uslovi korišćenja",
    links: [
      { href: "/terms-of-conditions", label: "Uslovi korišćenja" },
      { href: "/privacy-policy", label: "Politika privatnosti" },
      { href: "/prava-potrosaca", label: "Prava potrošača" },
    ],
  },

  {
    id: 4,
    title: "Beta Komerc",
    links: [
      { href: "/o-nama", label: "O nama" },
      { href: "/akcije", label: "Akcije" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/servis", label: "Servis opreme" },
      //{ href: "/prodavnice", label: "Prodavnice" },
      //{ href: "/zaposlenje", label: "Zaposlenje" },
    ],
  },
];
