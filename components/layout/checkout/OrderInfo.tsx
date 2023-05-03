import { Checkbox } from "components/ui/Checkbox";
import { useFormikContext } from "formik";
//import { intersectionWith } from "lodash";
import { useCartStore } from "stores/CartStore";
import { formatPrice } from "utils/price";
import PreviewItem from "./PreviewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isLoading: boolean;
}

const OrderInfo = ({ isLoading }: Props) => {
  const { items, totalPrice } = useCartStore();
  const { values, setFieldValue }: any = useFormikContext();

  const triggercheckBox = (value: string) =>
    setFieldValue("payment_method", value);

  return (
    <div className="orderInfo">
      <h4>
        Pregled porudžbine <span className="badge primary">{items.length}</span>
      </h4>
      <p>Proizvodi</p>
      <div className="products">
        {items.map((item) => (
          <PreviewItem key={item.product.id} item={item} />
        ))}
      </div>
      <p>Ukupno</p>
      <p className="totalPrice">{formatPrice(totalPrice)}</p>
      <div className="checkboxes">
        <div className="checkboxRow">
          <Checkbox
            isChecked={values["payment_method"] === "upon_delivery"}
            onClick={() => triggercheckBox("upon_delivery")}
          />
          <p>Plaćanje prilikom preuzimanja</p>
        </div>
        <div className="checkboxRow">
          <Checkbox
            isChecked={values["payment_method"] === "checks_upon_delivery"}
            onClick={() => triggercheckBox("checks_upon_delivery")}
          />
          <p>Čekovima prilikom preuzimanja</p>
        </div>
        <div className="checkboxRow">
          <Checkbox
            isChecked={values["payment_method"] === "in_store"}
            onClick={() => triggercheckBox("in_store")}
          />
          <p>U našim radnjama</p>
        </div>
        <div className="checkboxRow">
          <Checkbox
            isChecked={values["payment_method"] === "current_account"}
            onClick={() => triggercheckBox("current_account")}
          />
          <p>Uplatom na tekući račun</p>
        </div>
      </div>

      <div className="checkboxRow">
        <Checkbox
          isChecked={values.terms === true}
          onClick={() => setFieldValue("terms", !values.terms)}
        />
        <p>Pročitao/la sam i prihvatam uslove web mesta.</p>
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={!values.terms || isLoading}
      >
        {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Naručite"}
      </button>
    </div>
  );
};

export default OrderInfo;
