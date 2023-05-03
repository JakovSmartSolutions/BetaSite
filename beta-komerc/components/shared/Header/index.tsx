import { useQuery } from "react-query";

import { getAllCategories } from "api/categories";
import { HeaderBanner } from "./Banner";
import { HeaderMiddle } from "./Middle";
import { HeaderNav } from "./Nav";

export const Header = () => {
  const { data } = useQuery("allCategories", getAllCategories, {
    enabled: true,
  });

  return (
    <header>
      <HeaderBanner />
      <HeaderMiddle categories={data || []} />
      <HeaderNav categories={data || []} />
    </header>
  );
};
