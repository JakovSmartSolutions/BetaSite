import Link from "next/link";
import { useRouter } from "next/router";

import { Category } from "types/categories.types";

import { isActiveClass } from "utils/activeClass";
import { CategoriesMenu } from "./CategoriesMenu";
import useWindowSize from "@/hooks/useWindowSIze";

interface Props {
  categories: Category[];
}

export const HeaderNav = ({ categories }: Props) => {
  const { pathname } = useRouter();
  // const isMobileDevice = useWindowSize();

  // if (isMobileDevice) {
  //   return (
  //     <div className="container">
  //       <nav className="navigationMobile"></nav>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <nav className="navigation">
        <CategoriesMenu categories={categories} />
        <div className="links-container">
          <div className="links">
            <Link href="/akcije" className="link primary">
              Akcije
            </Link>
            {categories.slice(0, 5).map((el) => (
              <Link
                key={el.id}
                className={isActiveClass(pathname.includes(el.slug), "link")}
                href={`/kategorije/${el.slug}`}
              >
                {el.name}
              </Link>
            ))}
            <Link
              className={isActiveClass(pathname.includes("o-nama"), "link")}
              href="/o-nama"
            >
              O nama
            </Link>
            <Link
              className={isActiveClass(pathname.includes("kontakt"), "link")}
              href="/kontakt"
            >
              Kontakt
            </Link>
            {categories.length > 5 && <div className="show-more">{`>`}</div>}
          </div>
        </div>
      </nav>
    </div>
  );
};
