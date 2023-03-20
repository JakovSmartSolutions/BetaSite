import Image from "next/image";
import { Field, Form, Formik } from "formik";

import LogoImage from "public/assets/images/Logo.png";
import { useMutation } from "react-query";
import { contactUs } from "api/contact";
import { ContactUsPayload } from "api/contact/types";
import { Breadcrumb } from "components/shared/Breadcrumb";
// import { NextSeo } from 'next-seo';
// import { seoData } from 'seo/seo.data';

const initialValues: ContactUsPayload = { name: "", email: "", message: "" };

const ContactPage = () => {
  const { mutate, isLoading } = useMutation(contactUs);

  const onSubmit = (values: ContactUsPayload, { resetForm }: any) =>
    mutate(values, { onSuccess: resetForm });

  return (
    <>
      {/* <NextSeo
        title={seoData.contactPage.title}
        description={seoData.contactPage.description}
      /> */}
      <Breadcrumb name="Kontakt" />
      <div className="contactPage">
        <div className="container">
          <h1>Kontakt</h1>
          <div className="banner">
            <Image src={LogoImage} alt="Beta Komerc" width={350} height={100} />
          </div>
          <div className="holder">
            <div className="left">
              <h3>Podrška</h3>
              <p>
                Email adresa:
                <a href="mailto: info@betakomerc.rs">info@betakomerc.rs</a>
              </p>
              <p>
                Broj mobilnog telefona:
                <a href="tel: +381 64 823 8337">+381 64 823 8337</a>
              </p>
              <p>
                Broj fiksnog telefona:
                <a href="tel: +381 17 400 106">+381 17 400 106</a>
              </p>
            </div>
            <div className="right">
              <h2>Pitajte podršku</h2>
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                  <div className="field">
                    <label>* Unesite Vaše ime</label>
                    <Field name="name" type="text" required />
                  </div>
                  <div className="field">
                    <label>* Unesite Vašu email adresu</label>
                    <Field name="email" type="email" required />
                  </div>
                  <div className="field">
                    <label>* Unesite Vašu email adresu</label>
                    <Field name="message" as="textarea" required />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={isLoading}
                  >
                    Pošaljite poruku
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
