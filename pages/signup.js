// STYLES
import styles from "../styles/Login.module.scss";
// REACT HOOKS
import { useState } from "react";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
// ICONS
import { MdKeyboardArrowRight } from "react-icons/md";
// NEXT COMPONENTS
import Link from "next/link";
import Head from "next/head";
// LIB
import { validateSignup } from "../lib/validateSignup";
const LoginPage = () => {
  // States for input fileds
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({ field: "", message: "" });
  // Handling form submit
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
    if (validationError.message === "ok") {
      console.log("super");
      setError({ field: "", message: "" });
      // If there is no error make POST request
      const response = await fetch("/api/signup", {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      // Getting message back from server
      const message = await response.json();
      return;
    } else {
      // If there is an error display it on right place
      setError(validationError);
    }
  };
  return (
    <>
      <Head>
        <title>Dwavecode | Signup</title>
        <meta
          name="description"
          content="Napravite novi nalog i pocnite sa gledanjem kurseva i pomozite nam da unapredimo sajt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.Section__LayoutContainer}>
          <div className={styles.Section__Layout}>
            {/* Main */}
            <main className={styles.main}>
              {/* Content Wrapper */}
              <section className={styles.formSection}>
                <div className={styles.contentWrapper}>
                  {/* Banner */}
                  {/* Banner needs new design */}
                  <div className={styles.banner}>
                    <div>
                      <h2>Pozdrav, Prijatelju</h2>
                      <p>Napravi nalog i počni sa učenjem već danas</p>
                    </div>
                    <div>
                      <p>Već imaš nalog?</p>
                      <Button text="Uloguj se" link="/login" />
                    </div>
                  </div>
                  {/* Form Wrapper */}
                  <div className={styles.formWrapper}>
                    <h1>Registruj novi nalog</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      {/* Name */}
                      {/* Classes for handling error */}
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
                        {/* Error is displayed here */}
                        <p className={styles.errorMessage}>
                          {error.field === "name" ? error.message : ""}
                        </p>
                      </div>
                      {/* Email */}
                      {/* Classes for handling error */}
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
                        {/* Error is displayed here */}
                        <p className={styles.errorMessage}>
                          {error.field === "email" ? error.message : ""}
                        </p>
                      </div>
                      {/* Password */}
                      {/* Classes for handling error */}
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
                        {/* Error is displayed here */}
                        <p className={styles.errorMessage}>
                          {error.field === "password" ? error.message : ""}
                        </p>
                      </div>
                      {/* RepeatPassword */}
                      {/* Classes for handling error */}
                      <div
                        className={`${styles.formControl} ${
                          error.field === "repeatPassword"
                            ? styles.hasError
                            : ""
                        }`}
                      >
                        <label htmlFor="repeatPassword">Ponovi Lozinku *</label>
                        <input
                          type="password"
                          name="repeatPassword"
                          value={repeatPassword}
                          onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        {/* Error is displayed here */}
                        <p className={styles.errorMessage}>
                          {error.field === "repeatPassword"
                            ? error.message
                            : ""}
                        </p>
                      </div>
                      {/* TearmsOfUse */}
                      {/* Classes for handling error */}
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
                        {/* Error is displayed here */}
                        <p className={styles.errorMessage}>
                          {error.field === "checkBox" ? error.message : ""}
                        </p>
                      </div>
                      {/* Submit Button */}
                      <div className={styles.formControl}>
                        <button type="submit">
                          Registruj se <MdKeyboardArrowRight />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
