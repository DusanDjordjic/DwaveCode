// STYLES
import styles from "../styles/Home.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
import ButtonWhite from "../components/layout/smallComponents/buttonWhite/ButtonWhite";
import Scribble from "../components/scribble/Scribble";
// FRAMER MOTION
import { motion } from "framer-motion";
// ICONS
import { FaYoutube, FaDiscord, FaUserGraduate } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsChatFill, BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi";
// IMAGE SOURCES
import iconOne from "../public/HomePage/paper-plane.png";
import iconTwo from "../public/HomePage/freelance.png";
import iconThree from "../public/HomePage/logo-blue.png";
import iconFour from "../public/HomePage/patreon.png";
import blogillSrc from "../public/Illustrations/reading-il.svg";
import progillSrc from "../public/Illustrations/programming-il.svg";
import frieillSrc from "../public/Illustrations/friends-il.svg";
import smallCardOneSrc from "../public/Cards/Card-Design-02.jpg";
import smallCardTwoSrc from "../public/Cards/Card-Design-06.jpg";
import flSectionCardImageOne from "../public/HomePage/FreelanceSection/fl-books-icon.png";
import flSectionCardImageTwo from "../public/HomePage/FreelanceSection/fl-computer-icon.png";
import flSectionCardImageThree from "../public/HomePage/FreelanceSection/fl-trophy-icon.png";
import circlesSrc from "../public/emojis/SVG/circles.svg";
import card1 from "../public/HomePage/Cards/card-1.png";
import card2 from "../public/HomePage/Cards/card-2.png";
import card3 from "../public/HomePage/Cards/card-3.png";
import card4 from "../public/HomePage/Cards/card-4.png";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/xonokai";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwavecode</title>
        <meta name="description" content="Sajt za učenje veb programiranja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.introBannerSection}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.bannerTitle}>
              <h1>Dwavecode - Škola web programiranja</h1>
              <p>
                Danas kada je sve veća potreba za veb programerima mi vam nudimo
                potrebno znanje da postanete deo talasa koji nailazi. Sa našim
                kursevima moći ćete da napravite kompleksne aplikacije i
                unapredite svet u kojem svi zajedno živimo.
              </p>
              <div className={styles.buttonContainer}>
                <Button
                  text="Počni odmah"
                  link="/kursevi/pocetna"
                  fontSize={16}
                  isDisabled={false}
                />
                <ButtonWhite
                  text="O nama"
                  link="/about"
                  fontSize={16}
                  isDisabled={false}
                />
              </div>
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
                        postati dovoljno dobri u dizajniranju. Naučićemo sve od
                        elementarnih do naprednih znanja. Pogledaćemo kako da
                        pozicioniramo elemente na stranici, kako da napravimo
                        kul animacije, tranzicije i efekte.
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
        </div>
      </section>
      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <section className={styles.whyUsSection}>
            <div className={styles.titleWrapper}>
              <h2>Zašto baš Dwavecode?</h2>
              <div className={styles.scribble}>
                <Scribble text="Deste bre ljudi" rotate="10" />
              </div>
            </div>
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
          <section className={styles.helpUsSection}>
            <h2>Šta možete da uradite da pomognete Dwavecode</h2>

            <div className={styles.scribble}>
              <Scribble text="Follow za Follow? xD" rotate="2" />
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.helpUsRow}>
                <div className={styles.helpUsText}>
                  <h4>Podelite naš profil na instagramu</h4>
                  <p className={styles.text}>
                    Posetite nas na instagramu i podelite naš profil sa ljudima
                    koje interesuje veb dizajn i pravljenje veb aplikacije.
                    Jednim klikom pomoći ćete i njemu i nama.
                  </p>
                  <ButtonWhite
                    text="Posetite instagram"
                    link="https://www.instagram.com/dwavecode/"
                  />
                </div>
                <div className={styles.helpUsText}>
                  <h4>Pomozite nam da unapredimo veb-sajt</h4>
                  <p className={styles.text}>
                    Recite nam šta bi mogli da promenimo i kako da sajt i
                    celokupno iskustvo učinimo boljim. Smatramo da je odnos sa
                    klijentima veoma bitna stvar i zato cenimo svako vaše
                    mišljenje.
                  </p>
                  <ButtonWhite text="Kontaktirajte nas" link="/kontakt" />
                </div>
                <div className={styles.helpUsText}>
                  <h4>Podržite nas simboličnom donacijom</h4>
                  <p className={styles.text}>
                    Sva sredstva prikupljena kroz donacije direktno pomažu
                    dwavecode da postane još bolja platforma za učenje veb
                    programiranja.
                  </p>
                  <ButtonWhite
                    text="Simbolična donacija"
                    link="https://www.patreon.com/dwavecode"
                  />
                </div>
              </div>
              <div className={styles.picturesRow}>
                <div className={styles.subRow}>
                  <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                      <Image
                        src={card1}
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <div className={styles.card}>
                      <Image
                        src={card2}
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className={`${styles.subRow} ${styles.subRowSecond}`}>
                  <div className={styles.cardsWrapper}>
                    <div className={styles.card}>
                      <Image
                        src={card3}
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <div className={styles.card}>
                      <Image
                        src={card4}
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className={styles.freelanceSection}>
        <div className={styles.freelanceSectionWaveImage}></div>
        <div className={styles.freelanceSectionContent_Layout}>
          <div className={styles.freelanceSectionContent}>
            <div className={styles.freelanceSectionHeader}>
              <h2>Preuzmite stvar u svoje ruke</h2>
              <p>Nudimo vam edukaciju, praksu i mesto u našem timu</p>
            </div>
            <div className={styles.freelanceSectionTextContent}>
              <div className={styles.freelanceSectionText}>
                <div className={styles.freelanceSectionCard}>
                  <div className={styles.freelanceSectionCardImage}>
                    <div className={styles.cardLine}></div>
                    <div className={styles.imageWrapper}>
                      <Image src={flSectionCardImageOne} />
                    </div>
                  </div>
                  <div className={styles.freelanceSectionCardText}>
                    <Link href="/">
                      <a>
                        Kurs veb developera <MdKeyboardArrowRight />
                      </a>
                    </Link>
                    <p>
                      Nedeljne lekcije tako dizajnirane da i početnici postaju
                      profesionalci.
                    </p>
                  </div>
                </div>
                <div className={styles.freelanceSectionCard}>
                  <div className={styles.freelanceSectionCardImage}>
                    <div className={styles.cardLine}></div>
                    <div className={styles.imageWrapper}>
                      <Image src={flSectionCardImageTwo} />
                    </div>
                  </div>
                  <div className={styles.freelanceSectionCardText}>
                    <Link href="/">
                      <a>
                        Freelance &amp; Praksa <MdKeyboardArrowRight />
                      </a>
                    </Link>
                    <p>
                      Pridružite se našem freelance timu, steknite praksu i
                      zaradite.
                    </p>
                  </div>
                </div>
                <div className={styles.freelanceSectionCard}>
                  <div className={styles.freelanceSectionCardImage}>
                    <div className={styles.cardLine}></div>
                    <div className={styles.imageWrapper}>
                      <Image src={flSectionCardImageThree} />
                    </div>
                  </div>
                  <div className={styles.freelanceSectionCardText}>
                    <Link href="/">
                      <a>
                        Pomoć 24/7 <MdKeyboardArrowRight />
                      </a>
                    </Link>
                    <p>
                      Uvek smo vam na raspolaganju putem Email-a, Discord-a ili
                      četa.
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <section className={styles.endSection}>
            <div className={styles.endSectionText}>
              <h3>Počni sa Dwavecode programom</h3>
              <p>Uči potpuno besplatno od svoje kuće kad god ti to poželiš</p>
              <Button
                text="Počni odmah"
                link="/"
                isDisabled={false}
                fontSize={16}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
