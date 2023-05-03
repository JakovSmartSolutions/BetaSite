import { EmailIcon } from "@/public/assets/icons/Email";
import { LocationIcon } from "@/public/assets/icons/Location";
import Link from "next/link";

export const HeaderBanner = () => (
  <div className="headerBanner">
    <div className="container">
      <div className="headerBanner__content">
        <div className="left">
          <LocationIcon />
          <p>Bore Stankovića 59, 17000, Vranje</p>
        </div>
        <div className="right">
          <Link href="mailto: info@betakomerc.rs">
            <EmailIcon />
            <p>info@betakomerc.rs</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
