import Link from "next/link";
import { useRouter } from "next/router";

import { Category } from "types/categories.types";

import { isActiveClass } from "utils/activeClass";
import { CategoriesMenu } from "./CategoriesMenu";

interface Props {
  categories: Category[];
}

export const HeaderNav = ({ categories }: Props) => {
  const { pathname } = useRouter();

  return (
    <div className="container">
      <nav>
        <CategoriesMenu categories={categories} />
        <div className="links">
          <Link href="/akcije" className="link">
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
        </div>
      </nav>
    </div>
  );
};
