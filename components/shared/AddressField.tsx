import { Field, Form, Formik } from "formik";
import { useMutation } from "react-query";

import { UserAddress } from "types/auth.types";

import { createAddress, deleteAddress, updateAddress } from "api/auth";
import { handleAuth } from "hooks/handleAuth";

interface Props {
  userID: number;
  data?: UserAddress;
  type: "billing_address" | "shipping_address";
}

export const AddressField = ({ userID, data, type }: Props) => {
  const { fetchMe } = handleAuth();
  const { mutate: onCreate, isLoading } = useMutation((body: UserAddress) =>
    createAddress(userID || 0, body)
  );
  const { mutate: onUpdate, isLoading: isLoadingSec } = useMutation(
    (body: UserAddress) => updateAddress(userID || 0, body)
  );
  const { mutate: onDelete } = useMutation((id: number) =>
    deleteAddress(userID || 0, id)
  );

  const initialValues: UserAddress = {
    id: data?.id || 0,
    name: data?.name || "",
    last_name: data?.last_name || "",
    phone_number: data?.phone_number || "",
    email: data?.email || "",
    city: data?.city || "",
    post_code: data?.post_code || "",
    address: data?.address || "",
    company_name: data?.company_name || "",
    company_pib: data?.company_pib || "",
    type,
  };

  const onSubmit = (values: UserAddress) => {
    if (data) onUpdate(values, { onSuccess: fetchMe });
    else onCreate(values, { onSuccess: fetchMe });
  };

  const handleDelete = () => onDelete(data?.id || 0, { onSuccess: fetchMe });

  return (
    <div className="item">
      <div className="row">
        <h3>
          {type === "billing_address"
            ? "Adresa za naplatu"
            : "Adresa za isplatu"}
        </h3>
        {data && <span onClick={handleDelete}>Obriši</span>}
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
      >
        <Form>
          <div className="field">
            <label>*Ime</label>
            <Field name="name" required />
          </div>
          <div className="field">
            <label>*Prezime</label>
            <Field name="last_name" required />
          </div>
          <div className="field">
            <label>*Broj telefona</label>
            <Field name="phone_number" required />
          </div>
          <div className="field">
            <label>*Email</label>
            <Field name="email" type="email" required />
          </div>
          <div className="field">
            <label>*Grad</label>
            <Field name="city" required />
          </div>
          <div className="field">
            <label>*Poštanski broj</label>
            <Field name="post_code" required />
          </div>
          <div className="field">
            <label>*Adresa</label>
            <Field name="address" required />
          </div>
          <div className="field">
            <label>Naziv kompanije</label>
            <Field name="company_name" />
          </div>
          <div className="field">
            <label>PIB kompanije</label>
            <Field name="company_pib" />
          </div>
          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading || isLoadingSec}
          >
            Sačuvaj
          </button>
        </Form>
      </Formik>
    </div>
  );
};
