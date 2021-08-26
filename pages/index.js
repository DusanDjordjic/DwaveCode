// STYLES
import styles from "../styles/Home.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
// FRAMER MOTION
import { motion } from "framer-motion";
// ICONS
import { FaYoutube, FaDiscord, FaUserGraduate } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsChatFill, BsArrowRight } from "react-icons/bs";
// IMAGE SOURCES
import codeThinkigSrc from "../public/codeThinking.svg";
import bannerSrc from "../public/HomePage/banner.jpg";
import blogillSrc from "../public/Illustrations/reading-il.svg";
import progillSrc from "../public/Illustrations/programming-il.svg";
import frieillSrc from "../public/Illustrations/friends-il.svg";
import smallCardOneSrc from "../public/Cards/Card-Design-02.jpg";
import smallCardTwoSrc from "../public/Cards/Card-Design-06.jpg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <section className={styles.introBannerSection}>
            <div className={styles.backgroundGradient}></div>
            <div className={styles.content}>
              <div className={styles.bannerTitle}>
                <h1>Postanite uspešan veb developer uz naše kurseve</h1>
                <p>
                  Danas kada je sve veća potreba za veb programerima mi vam
                  nudimo potrebno znanje da postanete deo talasa koji nailazi.
                  Sa našim kursevima moći ćete da napravite kompleksne
                  aplikacije i unapredite svet u kojem svi zajedno živimo.
                </p>
                <Button
                  text="Počni odmah"
                  link="/kursevi/pocetna"
                  fontSize={16}
                  isDisabled={false}
                />
              </div>

              <div className={styles.bannerImage}>
                <div className={styles.bannerCard}>
                  <header>
                    <p className={styles.bold}>Dwavecode</p>
                    <div className={styles.searchBar}>
                      <GoSearch />
                      <p className={styles.regular}>Search...</p>
                    </div>
                  </header>
                  <div className={styles.smallCard}>
                    <p className={`${styles.bold} ${styles.smallCardTitle}`}>
                      Najnovije
                    </p>
                    <div className={styles.smallCardContent}>
                      <div className={styles.imageWrapper}>
                        <Image src={smallCardOneSrc} />
                      </div>

                      <div className={styles.smallCardText}>
                        <p
                          className={`${styles.bold} ${styles.smallCardTextTitle}`}
                        >
                          Css Kurs
                        </p>
                        <p
                          className={`${styles.regular} ${styles.smallCardTextText}`}
                        >
                          Ovaj kurs je namenjen svima, jer nikada ne možete
                          postati dovoljno dobri u dizajniranju. Naučićemo sve
                          od elementarnih do naprednih znanja. Pogledaćemo kako
                          da pozicioniramo elemente na stranici, kako da
                          napravimo kul animacije, tranzicije i efekte.
                        </p>

                        <Button
                          text="Počni sa učenjem"
                          link="/"
                          fontSize={12}
                          isDisabled={true}
                          className={styles.smallCardButton}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.smallCard}>
                    <p className={`${styles.bold} ${styles.smallCardTitle}`}>
                      Popularno
                    </p>
                    <div className={styles.smallCardContent}>
                      <div className={styles.imageWrapper}>
                        <Image src={smallCardTwoSrc} />
                      </div>

                      <div className={styles.smallCardText}>
                        <p
                          className={`${styles.bold} ${styles.smallCardTextTitle}`}
                        >
                          Postani veb developer
                        </p>
                        <p
                          className={`${styles.regular} ${styles.smallCardTextText}`}
                        >
                          Za mene postoji samo jedan dobar razlog zašto je veb
                          programiranje zanimljivije od drugih, a to je taj da
                          vrlo brzo i lako mogu da utičem na ceo svet putem
                          interneta.
                        </p>
                        <Button
                          text="Počni sa učenjem"
                          link="/"
                          fontSize={12}
                          isDisabled={true}
                          className={styles.smallCardButton}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.whyUsSection}>
            <h2>Zašto baš Dwavecode?</h2>
            <div className={styles.textWrapper}>
              <p>
                Već tri godine se bavimo veb dizajnom i pravljenjem veb
                aplikacija, uz pomoć najnovijih tehnologija kao na primer{" "}
                <span>React i Next.js</span>. Cilj nam je da upoznamo i
                pomognemo svakome da nauči kako se prave veb aplikacije. Ako
                želite da naučite kako da napravite sajt baš kao što je ovaj, na
                pravom ste mestu.
              </p>
              <p>
                Takođe svako može da{" "}
                <span>postane deo našeg freelance tima</span> i stekne realno
                iskustvo koje će mu kasnije dosta koristiti.
              </p>
            </div>
            <div className={styles.cardsWrapper}>
              <div className={`${styles.card}`}>
                <div className={styles.cardLine}></div>

                <Link href="/blog">
                  <a>
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <p className={styles.cardTitle}>Posetite blog</p>
                        <BsArrowRight />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src={blogillSrc} />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className={`${styles.card}`}>
                <div className={styles.cardLine}></div>

                <Link href="/kursevi/pocetna">
                  <a>
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <p className={styles.cardTitle}>Pogledajte kurseve</p>
                        <BsArrowRight />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src={progillSrc} />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className={`${styles.card}`}>
                <div className={styles.cardLine}></div>

                <Link href="/blog">
                  <a>
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <p className={styles.cardTitle}>Kontaktirajte nas</p>
                        <BsArrowRight />
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image src={frieillSrc} />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
