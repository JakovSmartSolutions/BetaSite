import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getSearchResult } from "api/products";
import { SearchIcon } from "public/assets/icons/Search";
import { CloseCircle } from "public/assets/icons/CloseCircle";

import { isActiveClass } from "utils/activeClass";

import useDebounce from "hooks/useDebounce";
import { useRouter } from "next/router";
import { SearchResult } from "./SearchResult";

interface Props {
  isOpenMob: boolean;
  setIsOpenMob: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchField = ({ isOpenMob, setIsOpenMob }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { push } = useRouter();
  const { debounce } = useDebounce();

  const { data, refetch } = useQuery(
    "searchResult",
    () => getSearchResult(searchQuery),
    { enabled: false }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    setIsFirstRender(true);
    if (!searchQuery && isFirstRender) return;
    debounce(refetch);
  }, [searchQuery]);

  const redirect = () => {
    if (!searchQuery) return;
    push(`/pretraga-proizvoda?search=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className={isActiveClass(isOpenMob, "searchInput")}>
      <CloseCircle className="closeBtn" onClick={() => setIsOpenMob(false)} />
      <div className="row">
        <input
          type="text"
          value={searchQuery}
          placeholder="Pretražite proizvod..."
          onChange={handleChange}
          className={isActiveClass(searchQuery.length ? true : false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") redirect();
          }}
        />
        <SearchIcon className="searchIcon" onClick={redirect} />
      </div>
      {searchQuery.length ? (
        <SearchResult
          data={data?.data || []}
          clearInput={() => {
            setSearchQuery("");
            setIsOpenMob(false);
          }}
        />
      ) : null}
    </div>
  );
};
