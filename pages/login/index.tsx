import Image from "next/image";
import LoginForm from "../../components/LoginForm/LoginForm";
import logo from "../../public/assets/logo.svg";
import welcomeImage from "../../public/assets/welcome-img.svg";

import styles from "../../styles/pages/Login.module.scss";

import localFont from "@next/font/local";
import HeadData from "../../components/Head";

const avenirNext = localFont({
  src: [
    {
      path: "../../public/font/AvenirNextLTPro-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/font/AvenirNextLTPro-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--avenirNext-font",
});

function index() {
  return (
    <>
      <HeadData />
      <div className={`${styles.container} ${avenirNext.variable}`}>
        <div>
          <span className={styles.logo}>
            <Image src={logo} alt="logo" />
          </span>
          <div className={styles.welcomeImg}>
            <Image src={welcomeImage} alt="welcome" />
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
export default index;
