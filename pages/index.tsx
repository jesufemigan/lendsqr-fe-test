import Head from "next/head";
import { Work_Sans } from "@next/font/google";
import localFont from "@next/font/local";

const workSans = Work_Sans({
  variable: "--workSans-font",
});

const avenirNext = localFont({
  src: "../public/font/AvenirNextLTPro-Regular.otf",
  variable: "--avenirNext-font",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Lendsqr | Empowering the smartest lenders</title>
        <meta
          name="description"
          content="A lending-as-a-service solution that powers lenders and scale digital lending business across multiple channels at the lowest cost"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}
