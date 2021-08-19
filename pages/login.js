import styles from "../styles/Login.module.scss";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.banner}>
          <h1>Login</h1>
        </div>
        <div className={styles.formWrapper}>
          <form>
            <input type="text" />
          </form>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
