import { Field, Form, Formik } from 'formik';
import { useMutation } from 'react-query';

import { updateAuthUser, updateAuthUserPassword } from 'api/auth';
import { DashboardWrap } from 'components/shared/DashboardWrap';
import { useAuthStore } from 'stores/AuthStore';
import { passwordSchema } from 'utils/yup';
import { FormikError } from 'components/shared/FormikError';
import { Breadcrumb } from 'components/shared/Breadcrumb';

const ProfilePage = () => {
  const { user } = useAuthStore();

  const { mutate: updateUser, isLoading } = useMutation(updateAuthUser);
  const { mutate: updateUserPassword, isLoading: isLoadingSec } = useMutation(
    updateAuthUserPassword
  );

  return (
    <>
      <Breadcrumb name="Detalji naloga" />
      <DashboardWrap className="profilePage" title="Profil">
        <Formik
          initialValues={{
            id: user?.id || 0,
            name: user?.name || '',
            email: user?.email || '',
          }}
          enableReinitialize
          onSubmit={(v) => updateUser(v)}
        >
          <Form>
            <h2>Detalji naloga</h2>
            <div className="field">
              <label>Ime</label>
              <Field name="name" type="text" required />
            </div>
            <div className="field">
              <label>Adresa e-pošte</label>
              <Field name="email" type="email" required />
            </div>
            <button className="btn-primary" type="submit" disabled={isLoading}>
              Sačuvaj promene
            </button>
          </Form>
        </Formik>
        <Formik
          initialValues={{
            id: user?.id || 0,
            old_password: '',
            password: '',
            password_confirmation: '',
          }}
          enableReinitialize
          onSubmit={(v) => updateUserPassword(v)}
          validationSchema={passwordSchema}
        >
          <Form>
            <h2>Lozinka</h2>
            <div className="field">
              <label>Trenutna lozinka</label>
              <Field name="old_password" type="password" required />
              <FormikError name="old_password" />
            </div>
            <div className="field">
              <label>Nova lozinka</label>
              <Field name="password" type="password" required />
              <FormikError name="password" />
            </div>
            <div className="field">
              <label>Potvrdi novu lozinku</label>
              <Field name="password_confirmation" type="password" required />
              <FormikError name="password_confirmation" />
            </div>
            <button
              className="btn-primary"
              type="submit"
              disabled={isLoadingSec}
            >
              Promeni lozinku
            </button>
          </Form>
        </Formik>
      </DashboardWrap>
    </>
  );
};

export default ProfilePage;
