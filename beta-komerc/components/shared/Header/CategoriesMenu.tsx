import { useEffect, useState } from "react";
import Link from "next/link";

import { Category } from "types/categories.types";

import { DownArrowIcon } from "public/assets/icons/DownArrow";
import { isActiveClass } from "utils/activeClass";
import { CategoriesIcon } from "@/public/assets/icons/Categories";

interface Props {
  categories: Category[];
}

export const CategoriesMenu = ({ categories }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<number>(0);
  const [subCategories, setSubCategories] = useState<Category[][]>([]);

  useEffect(() => {
    if (!isOpen) setSubCategories([]);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && categories && !subCategories.length)
      setSubCategories([categories]);
  }, [isOpen, categories, subCategories]);

  const setCategories = (arr: Category[], index: number) => {
    const len = subCategories.length;
    if (!arr.length && index + 1 === len) return;

    setSubCategories((prev) => {
      //  Slucaj kad se vratis nazad u plići nivo kategorije
      if (len > index + 2) {
        return prev
          .map((item, i) => (i === index + 1 ? arr : item))
          .splice(0, len - 2);
      }

      //  Slucaj kad misem prelazis preko istog nivoa kategorije
      if (len > index + 1)
        return prev.map((item, i) => (i === index + 1 ? arr : item));

      return [...prev, arr];
    });
  };

  return (
    <div className={isActiveClass(isOpen, "select")}>
      <div className="selectPreview" onClick={() => setIsOpen((prev) => !prev)}>
        <CategoriesIcon />
        <p>Sve kategorije</p>
        {/* <DownArrowIcon /> */}
      </div>
      {isOpen && (
        <>
          <div className="mainCategoryMask" onClick={() => setIsOpen(false)} />
          <div
            className="mainCategoryContainer paper"
            onClick={(e) => e.stopPropagation()}
          >
            {subCategories.map((item, index) => (
              <div className="column" key={index}>
                {item.map((el) => (
                  <Link
                    key={el.id}
                    href={`/kategorije/${el.slug}`}
                    className={isActiveClass(el.id === activeId)}
                    onMouseOver={() => {
                      setCategories(el.subcategories, index);
                      setActiveId(el.id);
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {el.name}{" "}
                    {el.subcategories.length ? <DownArrowIcon /> : null}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
