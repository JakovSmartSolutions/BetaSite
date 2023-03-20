import { FormikError } from 'components/shared/FormikError';
import { Field } from 'formik';

const CheckoutForm = () => {
  return (
    <>
      <h3>Lični podaci / Podaci kompanije</h3>
      <div className="step">
        <div className="field">
          <label>* Ime</label>
          <Field name="name" type="text" />
          <FormikError name="name" />
        </div>

        <div className="field">
          <label>* Prezime</label>
          <Field name="last_name" type="text" />
          <FormikError name="last_name" />
        </div>

        <div className="field">
          <label>Naziv kompanije</label>
          <Field name="company_name" type="text" />
          <FormikError name="company_name" />
        </div>

        <div className="field">
          <label>PIB</label>
          <Field name="company_pib" type="text" />
          <FormikError name="company_pib" />
        </div>
      </div>

      <h3>Podaci o isporuci</h3>
      <div className="step">
        <div className="field">
          <label>* Ulica</label>
          <Field name="address" type="text" />
          <FormikError name="address" />
        </div>

        <div className="field">
          <label>* Grad</label>
          <Field name="city" type="text" />
          <FormikError name="city" />
        </div>

        <div className="field">
          <label>* Poštanski broj</label>
          <Field name="post_code" type="number" />
          <FormikError name="post_code" />
        </div>

        <div className="field">
          <label>* Broj telefona</label>
          <Field name="phone_number" type="number" />
          <FormikError name="phone_number" />
        </div>

        <div className="field">
          <label>* Email adresa</label>
          <Field name="email" type="email" />
          <FormikError name="email" />
        </div>
      </div>

      <h3>Dodatne informacije</h3>
      <div className="field">
        <label>Napomene o narudžbini</label>
        <Field name="note" type="text" component="textarea" />
        <FormikError name="note" />
      </div>
    </>
  );
};

export default CheckoutForm;
