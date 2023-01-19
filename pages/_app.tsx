import "../styles/globals/index.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname === "/login") {
    return <Component {...pageProps} />;
  } else {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }
}
