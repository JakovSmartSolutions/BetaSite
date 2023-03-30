import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Polje je obavezno",
  },
  string: {
    email: "Unesite validan email",
  },
});

export const signInYup = Yup.object().shape({
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8, "Unesite najmanje 8 karaktera").required(),
});

export const signUpYup = Yup.object().shape({
  name: Yup.string().max(255).required(),
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8, "Unesite najmanje 8 karaktera").required(),
  password_confirmation: Yup.string()
    .min(8, "Unesite najmanje 8 karaktera")
    .required()
    .oneOf([Yup.ref("password"), null], "Lozinke se ne podudaraju"),
});

export const resetPassword = Yup.object().shape({
  name: Yup.string().max(255).required(),
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8, "Unesite najmanje 8 karaktera").required(),
  password_confirmation: Yup.string()
    .min(8, "Unesite najmanje 8 karaktera")
    .required()
    .oneOf([Yup.ref("password"), null], "Lozinke se ne podudaraju"),
});

export const checkoutYup = Yup.object().shape({
  name: Yup.string().required(),
  last_name: Yup.string().required(),
  company_name: Yup.string(),
  company_pib: Yup.string(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  phone_number: Yup.number().required(),
  email: Yup.string().email().required(),
  note: Yup.string(),
  payment_method: Yup.string().required(),
  post_code: Yup.number().required(),
});

export const passwordSchema = Yup.object().shape({
  old_password: Yup.string()
    .min(5, "Mora imati najmanje 8 karaktera")
    .required(),
  password: Yup.string().min(8, "Mora imati najmanje 8 karaktera").required(),
  password_confirmation: Yup.string()
    .min(8, "Mora imati najmanje 8 karaktera")
    .required()
    .oneOf([Yup.ref("password"), null], "Lozinke se moraju podudarati"),
});
