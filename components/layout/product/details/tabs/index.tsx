import { useState } from "react";

import { SingleProduct } from "types/singleProduct.types";
import { Specifications } from "./Specifications";
import { Declaration } from "./Declaration";
import { ProductDeclaration } from "@/api/singleProduct/types";

interface Props {
  product: SingleProduct;
}
export const Tabs = ({ product }: Props) => {
  const [activeTab, setActiveTab] = useState("spec");

  const setTabDescription = () => {
    setActiveTab("desc");
  };

  const setTabSpecification = () => {
    setActiveTab("spec");
  };

  const setTabDeclaration = () => {
    setActiveTab("decl");
  };

  return (
    <div className="tabs">
      <div className="headings">
        <div onClick={setTabDescription} className="heading">
          <h2 className={activeTab == "desc" ? "active" : ""}>Opis</h2>
        </div>
        <div onClick={setTabSpecification} className="heading">
          <h2 className={activeTab == "spec" ? "active" : ""}>Specifikacije</h2>
        </div>
        <div onClick={setTabDeclaration} className="heading">
          <h2 className={activeTab == "decl" ? "active" : ""}>Deklaracija</h2>
        </div>
      </div>
      <div>
        {activeTab === "spec" && (
          <Specifications attributes={product.attributes} />
        )}
        {activeTab === "desc" && (
          <div
            className="descriptionTab"
            dangerouslySetInnerHTML={{ __html: product.supplier_description }}
          ></div>
        )}
        {activeTab === "decl" && (
          <Declaration slug={product.mainCategory[0].slug || ""} />
        )}
      </div>
    </div>
  );
};
