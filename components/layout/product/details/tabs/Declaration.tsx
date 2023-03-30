import { useQuery } from "react-query";

import { getDeclaration } from "api/singleProduct";
import { ProductDeclaration } from "@/api/singleProduct/types";

interface Props {
  slug: string;
}

export const Declaration = ({ slug }: Props) => {
  const { data } = useQuery("product-declaration", () => getDeclaration(slug));
  if (!data) return null;

  return (
    <div className="declarationTab">
      <p>
        Naziv proizvoda: <span>{data.data.name}</span>
      </p>
      <p>
        Zemlja porekla: <span>{data.data.country_of_origin}</span>
      </p>
      <p>
        Prava potrošača:
        <span>{data.data.consumer_rights}</span>
      </p>
    </div>
  );
};
