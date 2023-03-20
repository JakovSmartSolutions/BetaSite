import Link from "next/link";

import { BigInfoIcon } from "public/assets/icons/BigInfo";
import { SecurityIcon } from "public/assets/icons/Security";
import { ShippingIcon } from "public/assets/icons/Shipping";
import { WalletIcon } from "public/assets/icons/Wallet";

export const Cards = () => (
  <div className="paper cardsGroup">
    <Link href="/nacin-isporuke" className="card">
      <div className="svgContainer">
        <ShippingIcon />
      </div>
      <div className="text">
        <h2>Besplatna dostava</h2>
        <p>na teritoriji cele Srbije</p>
      </div>
    </Link>
    <Link href="/nacin-placanja" className="card">
      <div className="svgContainer">
        <WalletIcon />
      </div>
      <div className="text">
        <h2>Načini plaćanja</h2>
        <p>12 rata bez kamate</p>
      </div>
    </Link>
    <Link href="/prava-potrosaca" className="card">
      <div className="svgContainer">
        <SecurityIcon />
      </div>
      <div className="text">
        <h2>Sigurna kupovina</h2>
        <p>sertifikovana prodavnica</p>
      </div>
    </Link>
    <Link href="/privacy-policy" className="card">
      <div className="svgContainer">
        <BigInfoIcon />
      </div>
      <div className="text">
        <h2>Call Centar</h2>
        <p>017 400 106 | 064 823 8337</p>
      </div>
    </Link>
  </div>
);
