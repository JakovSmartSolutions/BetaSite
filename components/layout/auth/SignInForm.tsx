import { useMutation } from 'react-query';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import { SignInPayload } from 'api/auth/types';

import { signIn } from 'api/auth';
import { signInYup } from 'utils/yup';
import { handleAuth } from 'hooks/handleAuth';
import { FormikError } from 'components/shared/FormikError';

const initialValues: SignInPayload = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const { mutate, isLoading } = useMutation(signIn);
  const { fetchMe } = handleAuth();
  const { push } = useRouter();

  const onSubmit = (values: SignInPayload) => {
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
      validationSchema={signInYup}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="field">
          <label>* Unesite Vašu email adresu</label>
          <Field name="email" type="email" required />
          <FormikError name="email" />
        </div>
        <div className="field">
          <label>* Unesite Vašu lozinku</label>
          <Field name="password" type="password" required />
          <FormikError name="password" />
        </div>
        <button type="submit" className="btn-primary" disabled={isLoading}>
          Prijavi se
        </button>
      </Form>
    </Formik>
  );
};
