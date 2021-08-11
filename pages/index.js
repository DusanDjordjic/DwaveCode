// STYLES
import styles from "../styles/Home.module.scss";
// REACT HOOKS
import { useState, useEffect } from "react";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
import WhiteSpace from "../components/layout/whiteSpace/whiteSpace";
// FRAMER MOTION
import { motion } from "framer-motion";
// IMAGE SOURCES
import codeThinkigSrc from "../public/codeThinking.svg";
import cardDesignSix from "../public/Cards/Card-Design-06.jpg";
import cardDesignOne from "../public/Cards/Card-Design-01.jpg";
import cardDesignTwo from "../public/Cards/Card-Design-02.jpg";
import cardDesignThree from "../public/Cards/Card-Design-03.jpg";
import cardDesignFour from "../public/Cards/Card-Design-04.jpg";
import gridBlobSrc from "../public/blob.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwave Code | Početna</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introSectionTextWrapper}>
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
              <h2>Besplatna škola programiranja</h2>
              <p>
                Na našem sajtu naučićete sve od osnova do naprednih tehnologija
                koje se koriste za programiranje web stranica. Takođe naučićete
                da razmišljate kao programer i da rešavate realne probleme.
              </p>
              <Button text={"Počni sa učenjem"} link="/blog/html" />
            </motion.div>
          </div>

          <div className={styles.introSectionImageWrapper}>
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
        <WhiteSpace />
        <section className={styles.gridSection}>
          <div className={styles.gridWrapper}>
            <div className={styles.blob}>
              <Image src={gridBlobSrc} />
            </div>
            <div className={styles.grid}>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignOne} />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignTwo} />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignThree} />
                  </a>
                </Link>
              </div>
              <div className={`${styles.gridItem} ${styles.gridItemSmall}`}>
                <Link href="/blog/html">
                  <a>
                    <Image src={cardDesignFour} />
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
                    <Image src={cardDesignSix} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <WhiteSpace />
      </main>
    </div>
  );
}
