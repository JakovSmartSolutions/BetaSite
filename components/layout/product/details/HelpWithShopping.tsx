import { BigInfoIcon } from "@/public/assets/icons/BigInfo";
import { DownArrowIcon } from "@/public/assets/icons/DownArrow";
import { SecurityIcon } from "@/public/assets/icons/Security";
import { ShippingIcon } from "@/public/assets/icons/Shipping";
import { WalletIcon } from "@/public/assets/icons/Wallet";

import { isActiveClass } from "@/utils/activeClass";

import { useState } from "react";

export const HelpWithShopping = () => {
  const [activeTab, setActiveTab] = useState(4);
  const toggleTab = (tab: number) =>
    setActiveTab((prev) => (prev === tab ? 0 : tab));

  const data = [
    {
      id: 1,
      icon: <ShippingIcon />,
      label: "Isporuka na teritoriji cele Srbije",
      content: (
        <div>
          <p>
            Beta Komerc isporuka na kućnu adresu funkcioniše vrlo jednostavno i
            efikasno:
          </p>
          <ul>
            <li>Naručite proivod online preko našeg Online Shop-a</li>
            <li>Platite avansno ili pouzećem</li>
            <li>
              U roku od jedan do dva dana, isporučićemo Vam kupljene proizvode,
              a cene isporuke su i više nego fer
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      icon: <WalletIcon />,
      label: "12 rata bez kamate",
      content: (
        <div>
          <p>
            Poštovani potrošači u prilici smo da Vam ponudimo kupovinu naših
            proizvoda na 12 mesečnih bez kamate!
          </p>
        </div>
      ),
    },
    {
      id: 3,
      icon: <SecurityIcon />,
      label: "Sigurna kupovina",
      content: (
        <div>
          <p>
            Sve dodatne informacije vezane za prodaju možete dobiti pozivajući
            naš Call Centar na sledeće brojeve 017 400 106 i 064 823 8337,
            slanjem poruke na e-mail info@betakomerc.rs ili putem kontakt forme.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      icon: <BigInfoIcon />,
      label: "Call Centar podška",
      content: (
        <div>
          <p>
            Sve dodatne informacije vezane za prodaju možete dobiti pozivajući
            naš Call Centar na sledeće brojeve 017 400 106 i 064 823 8337,
            slanjem poruke na e-mail info@betakomerc.rs ili putem kontakt forme.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="helpWithShopping">
      {data.map(({ id, icon, label, content }) => (
        <div key={id} className={isActiveClass(activeTab === id, "group")}>
          <h2 onClick={() => toggleTab(id)}>
            {icon} {label} <DownArrowIcon />
          </h2>
          <div className="tabContent">{content}</div>
        </div>
      ))}
    </div>
  );
};
