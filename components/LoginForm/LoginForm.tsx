import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/components/LoginForm.module.scss";

function LoginForm() {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <form className={styles.container}>
      <h1>Welcome!</h1>
      <p className={styles.text}>Enter details to login</p>

      <input type="email" placeholder="Email" />
      <span className={styles.password}>
        <input
          type={hidePassword ? `password` : "text"}
          placeholder="Password"
        />
        <p onClick={() => setHidePassword((prev) => !prev)}>
          {hidePassword ? "show" : "hide"}
        </p>
      </span>
      <p className={styles.forget}>Forgot Password?</p>

      <button type="submit">
        <Link href="/">Log in</Link>
      </button>
    </form>
  );
}
export default LoginForm;
