import "styles/styles.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "react-query";
import { queryClient } from "lib/reactQuery";

import App from "helpers/App";

export default function Root(props: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          theme="light"
          autoClose={3000}
          hideProgressBar
          closeOnClick
        />

        <App {...props} />
      </QueryClientProvider>
    </>
  );
}
