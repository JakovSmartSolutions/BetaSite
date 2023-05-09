import React, { useEffect } from "react";
import range from "lodash/range";

import { Meta } from "types/categoriesPage.types";

import { PaginationArrowIcon } from "public/assets/icons/PaginationArrow";
import { isActiveClass } from "utils/activeClass";

interface Props {
  meta: Meta;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ setActivePage, meta }: Props) => {
  const { total, per_page, current_page } = meta;

  const pagesCount = Math.ceil(total / per_page);
  const pages = range(1, pagesCount + 1);

  useEffect(() => {
    if (pagesCount === 1) {
      if (current_page !== 1) handleSetPage(current_page - 1);
    }
  }, [pagesCount]);

  const showNextPage = () => {
    if (current_page < pages[pages.length - 1]) handleSetPage(current_page + 1);
  };

  const showPrevPage = () => {
    if (current_page > 1) handleSetPage(current_page - 1);
  };

  const handleSetPage = (page: number) => {
    if (current_page !== page) setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const items = () => {
    const isLastest = current_page > pages.length - 3;
    const startIndex = isLastest ? pages.length - 3 : current_page - 1;
    const lastIndex = isLastest ? pages.length : current_page + 2;
    return isLonger ? pages.slice(startIndex, lastIndex) : pages;
  };

  const isLonger = pages.length > 5;

  return (
    <div className="pagination">
      <div onClick={showPrevPage} className="item arrow">
        <PaginationArrowIcon />
      </div>
      {isLonger && current_page > 1 && (
        <div className="item" onClick={() => handleSetPage(1)}>
          1
        </div>
      )}
      {isLonger && current_page > 2 && <div>...</div>}
      {items().map((page) => (
        <div
          key={page}
          onClick={() => handleSetPage(page)}
          className={isActiveClass(page === current_page, "item")}
        >
          {page}
        </div>
      ))}
      {isLonger && pages.length - 3 > current_page && <div>...</div>}
      {isLonger && pages.length - 2 > current_page && (
        <div className="item" onClick={() => handleSetPage(pages.length)}>
          {pages.length}
        </div>
      )}
      <div onClick={showNextPage} className="item arrow">
        <PaginationArrowIcon />
      </div>
    </div>
  );
};
