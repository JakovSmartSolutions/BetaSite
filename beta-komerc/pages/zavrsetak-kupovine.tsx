import { deleteCart } from "api/cart";
import { storeOrder } from "api/checkout";
import { OrderPaylaod } from "api/checkout/types";
import CheckoutForm from "components/layout/checkout/CheckoutForm";
import OrderInfo from "components/layout/checkout/OrderInfo";
import { Breadcrumb } from "components/shared/Breadcrumb";
import { Form, Formik, FormikValues } from "formik";
//import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
//import { seoData } from 'seo/seo.data';
import { useAuthStore } from "stores/AuthStore";
import { useCartStore } from "stores/CartStore";
import { checkoutYup } from "utils/yup";

const initialValues = {
  name: "",
  last_name: "",
  company_name: "",
  company_pib: "",
  address: "",
  post_code: "",
  city: "",
  phone_number: "",
  email: "",
  note: "",
  payment_method: "",
  terms: true,
};

const Checkout = () => {
  const { mutate: createOrder, isLoading } = useMutation(storeOrder);
  const { user } = useAuthStore();
  const { push } = useRouter();
  const { clearCart } = useCartStore();
  const { mutate: removeCart } = useMutation(deleteCart);

  const onSubmit = (values: FormikValues) =>
    createOrder({ ...values, userId: user?.id } as OrderPaylaod, {
      onSuccess: () => {
        toast("Porudžbina uspešno kreirana", { type: "success" });
        push("/uspesna-kupovina");
        removeCart(user?.id);
        clearCart();
      },
    });

  return (
    <>
      {/* <NextSeo
        title={seoData.checkoutPage.title}
        description={seoData.checkoutPage.description}
      /> */}
      <Breadcrumb name="Završetak kupovine" />
      <div className="checkoutPage container">
        <h3>Završetak kupovine</h3>
        <div className="checkoutContainer">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={checkoutYup}
          >
            <Form>
              <div className="paper">
                <CheckoutForm />
              </div>
              <div className="paper orderInfo">
                <OrderInfo isLoading={isLoading} />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Checkout;
