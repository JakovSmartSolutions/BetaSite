import { support } from "@/api/contact";
import { SupportPayload } from "@/api/contact/types";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Field, Form, Formik } from "formik";
import { useMutation } from "react-query";

const initialValues: SupportPayload = {
  name: "",
  email: "",
  phone: "",
  ticketType: "",
  ticketTitle: "",
  message: "",
};

export const SupportPage = () => {
  const { mutate, isLoading } = useMutation(support);

  const onSubmit = (values: SupportPayload, { resetForm }: any) =>
    mutate(values, { onSuccess: resetForm });

  return (
    <>
      <Breadcrumb name="Korisnička podrška" />
      <div className="supportPage">
        <h1>Korisnička podrška</h1>
        <p>
          Sve dodatne informacije vezane za prodaju možete dobiti pozivajući naš
          Call centar, slanjem poruke na e-mail: info@betakomerc.rs ili putem
          kontakt forme ispod.
        </p>
        <div className="supportContainer">
          <div className="form">
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <div className="field">
                  <label>Ime i prezime</label>
                  <Field name="name" type="text" required />
                </div>
                <div className="field">
                  <label>Email adresa</label>
                  <Field name="email" type="email" required />
                </div>
                <div className="field">
                  <label>Telefon</label>
                  <Field name="phone" type="text" required />
                </div>
                <div className="field">
                  <label>Vrsta upita</label>
                  <Field name="ticketType" as="select" required>
                    <option value="provera">Provera narudžbine</option>
                    <option value="reklamacija">Reklamacija</option>
                    <option value="povrat">Povrat</option>
                    <option value="ostalo">Ostalo</option>
                  </Field>
                </div>
                <div className="field">
                  <label>Naslov upita</label>
                  <Field name="ticketTitle" type="text" required />
                </div>
                <div className="field">
                  <label>Poruka</label>
                  <Field name="message" as="textarea" required />
                </div>
                <div className="field">
                  <label>Dodavanje fajlova</label>
                  <label className="fileButton" htmlFor="image">
                    Upload file
                  </label>
                  <Field id="image" name="image" type="file" />
                </div>

                <p>
                  *Možete nam poslati sliku narudžbine, računa, proizvoda, itd.
                </p>
                <p>
                  *Maksimalna veličina formata 3MB, podržani formati pdf, jpeg,
                  png
                </p>

                <button type="submit" disabled={isLoading}>
                  Pošalji
                </button>
              </Form>
            </Formik>
          </div>
          <div className="right">
            <div className="block">
              <h2>Beta Komerc podrška</h2>
              <p>
                email. <span>info@betakomerc.rs</span>
              </p>
              <p>
                tel. <span>017 400 106</span>
              </p>
              <p>
                mob. <span>064 823 8337</span>
              </p>
            </div>
            <div className="block">
              <h2>Najčešća pitanja</h2>
              <p>Kako naručiti</p>
              <p>Načini plaćanja</p>
              <p>Isporuka robe</p>
              <p>Reklamacije i povrati</p>
              <p>Akcije</p>
              <p>Zaposlenje</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
