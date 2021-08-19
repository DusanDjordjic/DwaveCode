import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.banner}>
            <div>
              <h2>Dwavecode</h2>
              <p>Sajt za besplatno učenje programiranja</p>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <h1>Uloguj se</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="password">Lozinka</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.formControl}>
                <button type="submit">Uloguj se</button>
              </div>
              <Link href="/signup">Imaš nalog? Uloguj se.</Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
