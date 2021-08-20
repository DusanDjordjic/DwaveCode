import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";
import { validateSignup } from "../lib/validateSignup";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({ field: "", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate data
    const validationError = validateSignup(
      name,
      email,
      password,
      repeatPassword,
      checkbox
    );
    console.log(validationError.message);
    if (validationError.message === "ok") {
      console.log("super");
      // Ako nema gresaka naprviti novog usera
      const response = await fetch("/api/signup", {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const message = await response.json();
      console.log(message);
      return;
    } else {
      // Ako ima greska prikazati je na odgovrajucem mestu
      setError(validationError);
    }
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
              <div
                className={`${styles.formControl} ${
                  error.field === "name" ? styles.hasError : ""
                }`}
              >
                <label htmlFor="name">Ime *</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <p className={styles.errorMessage}>
                  {error.field === "name" ? error.message : ""}
                </p>
              </div>
              <div
                className={`${styles.formControl} ${
                  error.field === "email" ? styles.hasError : ""
                }`}
              >
                <label htmlFor="email">Email *</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.errorMessage}>
                  {error.field === "email" ? error.message : ""}
                </p>
              </div>
              <div
                className={`${styles.formControl} ${
                  error.field === "password" ? styles.hasError : ""
                }`}
              >
                <label htmlFor="password">Lozinka *</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className={styles.errorMessage}>
                  {error.field === "password" ? error.message : ""}
                </p>
              </div>
              <div
                className={`${styles.formControl} ${
                  error.field === "repeatPassword" ? styles.hasError : ""
                }`}
              >
                <label htmlFor="repeatPassword">Ponovi Lozinku *</label>
                <input
                  type="password"
                  name="repeatPassword"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <p className={styles.errorMessage}>
                  {error.field === "repeatPassword" ? error.message : ""}
                </p>
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
                <p className={styles.errorMessage}>
                  {error.field === "checkBox" ? error.message : ""}
                </p>
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
