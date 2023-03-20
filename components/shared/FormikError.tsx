import { useFormikContext } from 'formik';

interface Props {
  name: string;
}

export const FormikError = ({ name }: Props) => {
  const { errors, touched }: any = useFormikContext();

  return (
    <>
      {errors && errors[name] && touched[name] && (
        <p className="errorMsg">{errors[name]}</p>
      )}
    </>
  );
};
