import Link from 'next/link';
import { Bulb } from 'public/assets/icons/Bulb';
import { ElipseShadow } from 'public/assets/icons/ElipseShadow';
import { Error404 } from 'public/assets/icons/Error404';

const NotFoundPage = () => (
  <div className="noFoundPage flexCenter">
    <div className="centered">
      <div className="left">
        <Error404 className="error404" />
        <p>Žao nam je, stranica nije pronađena.</p>
        <Link href="/" className="btn-primary">
          Nazad na pocetnu
        </Link>
      </div>

      <div className="bulb flexCenter">
        <Bulb className="bulbIcon" />
        <ElipseShadow className="shadow" />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
