import { useMutation } from "react-query";
import { Field, Form, Formik } from "formik";

import { newsletterSubscribe } from "api/contact";
import { NewsletterIcon } from "public/assets/icons/Newsletter";

export const Newsletter = () => {
  const { mutate } = useMutation(newsletterSubscribe);

  const onSubmit = (values: any, { resetForm }: any) => {
    if (!values.checked) return;
    mutate(values.email, { onSuccess: resetForm });
  };

  return (
    <div className="newsletter">
      <div className="left">
        <div className="iconContainer">
          <NewsletterIcon />
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h2>Prijavite se na Newsletter</h2>
          <p>
            Ne propustite sjajne popuste i pogodnosti, <br /> samo za
            prijavljene kupce.
          </p>
        </div>
        <Formik
          initialValues={{ email: "", checked: false }}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Field
                name="email"
                type="email"
                placeholder="Unesite email adresu..."
                required
              />
              <button type="submit" className="btn-primary">
                Prijavi se
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
