import { useMutation } from 'react-query';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import { SignUpPayload } from 'api/auth/types';

import { signUp } from 'api/auth';
import { signUpYup } from 'utils/yup';
import { handleAuth } from 'hooks/handleAuth';
import { FormikError } from 'components/shared/FormikError';

const initialValues: SignUpPayload = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const SignUpForm = () => {
  const { mutate, isLoading } = useMutation(signUp);
  const { fetchMe } = handleAuth();
  const { push } = useRouter();

  const onSubmit = (values: SignUpPayload) => {
    mutate(values, {
      onSuccess() {
        push('/');
        fetchMe();
      },
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpYup}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="field">
          <label>* Unesite Vaše ime</label>
          <Field name="name" type="text" />
          <FormikError name="name" />
        </div>
        <div className="field">
          <label>* Unesite Vašu email adresu</label>
          <Field name="email" type="email" />
          <FormikError name="email" />
        </div>
        <div className="field">
          <label>* Unesite Vašu lozinku</label>
          <Field name="password" type="password" />
          <FormikError name="password" />
        </div>
        <div className="field">
          <label>* Potvrdite Vašu lozinku</label>
          <Field name="password_confirmation" type="password" />
          <FormikError name="password_confirmation" />
        </div>
        <button type="submit" className="btn-primary" disabled={isLoading}>
          Registruj se
        </button>
      </Form>
    </Formik>
  );
};
