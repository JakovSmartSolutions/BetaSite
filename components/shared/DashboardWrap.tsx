import { signOut } from "api/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useAuthStore } from "stores/AuthStore";

import { isActiveClass } from "utils/activeClass";
import { getStorageItem, removeStorageItem } from "utils/storage";

interface Props {
  title: string;
  children: any;
  className: string;
}

export const DashboardWrap = ({ title, children, className }: Props) => {
  const { mutate } = useMutation(signOut);
  const { setUser } = useAuthStore();
  const { push, pathname } = useRouter();

  useEffect(() => {
    const token = getStorageItem("token");
    if (!token) push("/");
  }, []);

  const onSignOut = () => {
    mutate(undefined, {
      onSuccess() {
        push("/");
        setUser(null);
        removeStorageItem("token");
      },
    });
  };

  return (
    <div className={`dashboardPage ${className}`}>
      <div className="container">
        <h1 className="pageTitle">{title}</h1>
        <div className="wrapper">
          <div className="paper menu">
            {items
              .filter((i) => !i.href.includes("porudzbine"))
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={isActiveClass(pathname === item.href)}
                >
                  {item.label}
                </Link>
              ))}
            <p onClick={onSignOut}>Odjavi se</p>
          </div>
          <div className="paper content">{children}</div>
        </div>
      </div>
    </div>
  );
};

const items = [
  { id: 1, href: "/moj-nalog/detalji-naloga", label: "Profil" },
  { id: 2, href: "/moj-nalog/porudzbine", label: "Porudžbine" },
  { id: 3, href: "/moj-nalog/adrese", label: "Adrese" },
];
