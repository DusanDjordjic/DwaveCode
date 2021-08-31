// STYLES
import styles from "../styles/Login.module.scss";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
// ICONS
import { MdKeyboardArrowRight } from "react-icons/md";
// REACT HOOKS
import { useState, useEffect, useRef } from "react";
// NEXT COMPONENTS
import Head from "next/head";
import Link from "next/link";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/xonokai";

const LoginPage = () => {
  const initialFormState = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    name: "",
    name: "",
    name: "",
  };
  // States for input fileds
  const [isLogin, setIsLogin] = useState(true);
  const [elementsX, setElementsX] = useState({ bannerX: 0, formX: 0 });
  const [form, setForm] = useState(initialFormState);

  const bannerRef = useRef();
  const formRef = useRef();
  // Handling form submit
  const handleSubmit = (e) => {
    // Connect to db
    // make request
    // login user
    e.preventDefault();
  };
  const handleChange = () => {};
  const handleSwitch = () => {
    const newElementsX = {
      bannerX: bannerRef.current.clientWidth + 2,
      formX: formRef.current.clientWidth,
    };
    setElementsX(newElementsX);
    setIsLogin((prevState) => !prevState);
  };
  const handleResize = () => {
    let newElementsX = {
      bannerX: bannerRef.current.clientWidth + 2,
      formX: formRef.current.clientWidth,
    };

    setElementsX(newElementsX);
  };
  useEffect(() => {
    const newElementsX = {
      bannerX: bannerRef.current.clientWidth + 2,
      formX: formRef.current.clientWidth,
    };
    setElementsX(newElementsX);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Dwavecode | {isLogin ? "Login" : "Sign up"}</title>
        <meta
          name="description"
          content="Ulogujte sa na svoj nalog i pocnite sa gledanjem kurseva i pomozite nam da unapredimo sajt"
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
                  <div
                    className={styles.bannerWrapper}
                    ref={bannerRef}
                    style={
                      isLogin
                        ? {
                            transform: `translateX(0px)`,
                            borderTopRightRadius: 15,
                            borderBottomRightRadius: 15,
                          }
                        : {
                            transform: `translateX(${elementsX.formX}px)`,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                          }
                    }
                  >
                    <div className={styles.banner}>
                      <h2>{isLogin ? "Dobrodosao nazad," : "Pozdrav,"}</h2>
                      <p>
                        {isLogin
                          ? " Pariatur rem fugiat temporibus repudiandae quo, magnam velit dolores debitis perspiciatis quod!"
                          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
                      </p>
                      <p>{isLogin ? "Nemaš nalog?" : "Već imaš nalog?"}</p>
                      <button onClick={handleSwitch}>
                        {isLogin ? "Registruj se" : "Uloguj se"}{" "}
                        <MdKeyboardArrowRight />
                      </button>
                    </div>
                  </div>
                  <div
                    className={styles.formWrapper}
                    ref={formRef}
                    style={
                      isLogin
                        ? { transform: `translateX(0px)` }
                        : {
                            transform: `translateX(${-elementsX.bannerX}px)`,
                          }
                    }
                  >
                    <h1>{isLogin ? "Uloguj se" : "Registruj se"}</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Officia magni quaerat, veniam, deleniti voluptatibus modi
                      adipisci maiores sed natus quibusdam sapiente eius laborum
                      nam? Tenetur modi architecto, pariatur rerum impedit
                      perspiciatis tempore hic. Quos reprehenderit enim magni
                      eaque assumenda quam velit mollitia cupiditate molestiae
                      vel, ab delectus recusandae et quo minima inventore ex
                      nesciunt obcaecati, expedita magnam fugit sapiente
                      adipisci at? Autem quia mollitia alias possimus, omnis
                      sequi velit, temporibus recusandae molestiae, earum
                      voluptatum similique? Veritatis, nam. Alias veniam quia
                      ea. Reprehenderit quo molestias iusto animi eveniet vero
                      nesciunt repellendus magnam, quisquam a distinctio,
                      dolorum voluptatum et, nobis corporis neque? Lorem, ipsum
                      dolor sit amet consectetur adipisicing elit. Officia magni
                      quaerat, veniam, deleniti voluptatibus modi adipisci
                      maiores sed natus quibusdam sapiente eius laborum nam?
                      Tenetur modi architecto, pariatur rerum impedit
                      perspiciatis tempore hic.
                    </p>
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
