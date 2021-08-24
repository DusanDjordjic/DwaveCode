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
import { BsChatFill } from "react-icons/bs";
// IMAGE SOURCES
import codeThinkigSrc from "../public/codeThinking.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Head */}
      <Head>
        <title>Dwavecode | Početna</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main */}
      <main className={styles.main}>
        {/* Intro Section */}
        <section className={styles.introSection}>
          {/* Intro Section Text */}
          <div className={styles.introSectionTextWrapper}>
            {/* Motion Div */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <h1>Dwave Code</h1>
              <h3>Besplatna škola programiranja</h3>
              <p>
                Na našem sajtu naučićete sve od osnova do naprednih tehnologija
                koje se koriste za programiranje web stranica. Takođe naučićete
                da razmišljate kao programer i da rešavate realne probleme.
              </p>
              <Button text={"Počni sa učenjem"} link="/blog" />
            </motion.div>
          </div>
          {/* Intro Section Image */}
          <div className={styles.introSectionImageWrapper}>
            {/* Motion Div */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <Image src={codeThinkigSrc} alt="Code Thinking" />
            </motion.div>
          </div>
        </section>
        {/* Our Service Section */}
        <section className={styles.ourServiceSection}>
          {/* Our Service Section Title */}
          <div className={styles.ourServiceSectionTitleWrapper}>
            <h2>Naše usluge</h2>
          </div>
          {/* Our Section Cards Wrapper */}
          <div className={styles.ourServiceSectionCardsWrapper}>
            {/* Card - Kontakt*/}
            <div className={styles.card}>
              <Link href="/kontakt">
                <a>
                  <BsChatFill />
                  <p>Postavite pitanje</p>
                  <p>Odgovor u što kraćem roku do 24 sata</p>
                </a>
              </Link>
            </div>
            {/* Card - Kurs */}
            <div className={styles.card}>
              <Link href="/kurs">
                <a>
                  <FaUserGraduate />
                  <p>Besplatni kursevi</p>
                  <p>Dobijate 100% besplatni kurs veb-programiranja</p>
                </a>
              </Link>
            </div>
            {/* Card - Discord */}
            <div className={styles.card}>
              <Link href="/kurs">
                <a target="_blank">
                  <FaDiscord />
                  <p>Discord bleja</p>
                  <p>Svake nedelje bleja na discordu.</p>
                </a>
              </Link>
            </div>
            {/* Card - Youtube */}
            <div className={styles.card}>
              <Link href="https://www.youtube.com/channel/UCE1U-7CyefeqKJDa2Tua2_w">
                <a target="_blank">
                  <FaYoutube />
                  <p>Live stream-ovi</p>
                  <p>Dođite da se družimo i naučimo nešto novo</p>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* <section className={styles.startLearningSection}>
          <BlobCarousel data={blobCarouselData} />
        </section> */}
        {/* <section className={styles.gridSection}>
          <div className={styles.gridWrapper}>
            <div className={styles.blob}>
              <Image src={gridBlobSrc} alt="blob" />
            </div>
            <div className={styles.grid}>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignOne} alt="banner" />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignTwo} alt="banner" />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignThree} alt="banner" />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignFour} alt="banner" />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>Uskoro!</a>
                </Link>
              </div>
              <div
                className={`${styles.gridItem} ${styles.gridItemSix} ${styles.gridItemBig}`}
              >
                <Link href="/blog">
                  <a>
                    <Image src={cardDesignSix} alt="banner" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
