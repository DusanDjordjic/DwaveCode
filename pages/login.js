// STYLES
import styles from "../styles/Login.module.scss";
// REACT HOOKS
import { useState } from "react";
// NEXT COMPONENTS
import Head from "next/head";
import Link from "next/link";
const LoginPage = () => {
  // States for input fileds
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handling form submit
  const handleSubmit = (e) => {
    // Connect to db
    // make request
    // login user
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Dwavecode | Login</title>
        <meta
          name="description"
          content="Ulogujte sa na svoj nalog i pocnite sa gledanjem kurseva i pomozite nam da unapredimo sajt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {/* Main */}
        <main className={styles.main}>
          {/* Content Wrapper */}
          <div className={styles.contentWrapper}>
            {/* Banner */}
            <div className={styles.banner}>
              <div>
                <h2>Dwavecode</h2>
                <p>Sajt za besplatno učenje programiranja</p>
              </div>
            </div>
            {/* Form Wrapper */}
            <div className={styles.formWrapper}>
              <h1>Uloguj se</h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                {/* Email */}
                <div className={styles.formControl}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password */}
                <div className={styles.formControl}>
                  <label htmlFor="password">Lozinka</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* Submit Button */}
                <div className={styles.formControl}>
                  <button type="submit">Uloguj se</button>
                </div>
                {/* To Signup */}
                <Link href="/signup">Imaš nalog? Uloguj se.</Link>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default LoginPage;
