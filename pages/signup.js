import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
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
            <h1>Registruj novi nalog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.formControl}>
                <label htmlFor="name">Ime *</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="email">Email *</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="password">Lozinka *</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="repeatPassword">Ponovi Lozinku *</label>
                <input
                  type="password"
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div
                className={`${styles.formControl} ${styles.formControlChexkBox}`}
              >
                <input
                  type="checkbox"
                  name="tearmsOfUse"
                  checked={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                />
                <label htmlFor="tearmsOfUse">
                  Slažem se sa <Link href="/">uslovima korišćenja</Link>
                </label>
              </div>
              <div className={styles.formControl}>
                <button type="submit">Registruj se</button>
              </div>
              <Link href="/login">Nemaš nalog? Naprav novi.</Link>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
