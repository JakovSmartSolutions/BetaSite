import { SignInForm } from "components/layout/auth/SignInForm";
import { SignUpForm } from "components/layout/auth/SignUpForm";
import { Breadcrumb } from "components/shared/Breadcrumb";
//import { NextSeo } from 'next-seo';
import { useState } from "react";
//import { seoData } from 'seo/seo.data';
import { isActiveClass } from "utils/activeClass";

const AuthPage = () => {
  const [tab, setTab] = useState<"signUp" | "signIn">("signIn");

  const changeTab = (selected: "signUp" | "signIn") => {
    if (tab === selected) return;
    setTab(selected);
  };

  return (
    <>
      {/* <NextSeo
        title={seoData.authPage.title}
        description={seoData.authPage.description}
      /> */}
      <Breadcrumb name="Registracija" />
      <div className="authPage">
        <div className="container">
          <div className="tabs">
            <p
              className={isActiveClass(tab === "signUp")}
              onClick={() => changeTab("signUp")}
            >
              Registruj se
            </p>
            <p
              className={isActiveClass(tab === "signIn")}
              onClick={() => changeTab("signIn")}
            >
              Prijavi se
            </p>
          </div>
          {tab === "signIn" ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
