import { EmailIcon } from "@/public/assets/icons/Email";
import { LocationIcon } from "@/public/assets/icons/Location";

export const HeaderBanner = () => (
  <div className="headerBanner">
    <div className="container">
      <div className="headerBanner__content">
        <div className="left">
          <LocationIcon />
          <p>Bore Stankovića 59, 17000, Vranje</p>
        </div>
        <div className="right">
          <EmailIcon />
          <p>info@betakomerc.rs</p>
        </div>
      </div>
    </div>
  </div>
);
