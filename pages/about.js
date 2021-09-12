// STYLES
import styles from "../styles/About.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
// FRAMER MOTION
import { motion } from "framer-motion";
// IMAGE SRORCES
import teamworkSrc from "../public/about/teamwork-image.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwavecode | O nama</title>
        <meta name="description" content="Sajt za učenje veb programiranja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <section className={styles.introBannerSection}>
            <div className={styles.content}>
              <h3>Dwavecode</h3>
              <h3>Dwavecode</h3>
            </div>
          </section>
          <section className={styles.secondSection}>
            <div className={styles.introText}>
              <h1>O nama</h1>
              <p className={styles.quote}>
                &quot;Ljudi veruju u ono što naprave&quot;
              </p>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                Dwavecode je besplatna online škola programiranja, koja Vas uči
                web dizajnom i web programiranjem.
              </div>
              <div className={styles.textWrapper}>
                Kursevi i lekcije su napravljeni tako da Vam nije potrebno
                prethodno znanje. Garantujemo Vam da ćete ukoliko se trudite
                dostići zavidan nivo znanja iz najnovijih i najboljih web
                tehnologija.
              </div>
              <div className={styles.textWrapper}>
                Verujemo da svako može da doprinese našoj zajednici i zato
                dajemo <span>šansu svima</span> da postanu deo novog talasa koji
                dolazi. Slušamo svaki Vaš predlog ili kritiku i tako se trudimo
                da celo iskustvo unapredimo.
              </div>
              <div className={styles.textWrapper}>
                Svako ko ima znanja može da postane deo našeg{" "}
                <span>freelance tima</span> i da na taj nači stiče realno
                iskustvo u ovoj industriji, a pritom zaradi. Ako nemate znanje
                sad pogledajte kurseve i imaćete ga sigurno!
              </div>
            </div>
          </section>
          <section className={styles.thirdSection}>
            <Image src={teamworkSrc} />
            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <h3>Naša priča</h3>
                Dwavecode je nastao kao odgovor na &quot;milion&quot; drugih
                kurseva koji Vam za uloženi novac ne daju skoro ništa. Mi Vam
                nudimo <span>od osnovnog do naprednog znanja,</span> koje ćete
                vrlo teško pronaći bilo gde drugde, a posebno ne besplatno
              </div>
              <div className={styles.textWrapper}>
                <h3>Šta želimo da postignemo</h3>
                Želimo da napravimo tim developera gde nema boljeg ili lošijeg
                člana. To je <span>filosofija</span> kojom se vodimo i verujemo
                da svako može da doprinese timu svojim idejama ili umećem i da
                za to bude nagrađen.
              </div>
              <div className={styles.textWrapper}>
                <h3>Postanite član</h3>
                Ako želite da postanete član pridružite se našem{" "}
                <Link href="https://discord.gg/9dp3mRtN">discord serveru</Link>,
                upoznajte ostale članove, družite se i najbitnije od svega{" "}
                <span>zabavite se.</span> Svake nedelje odgovaramo na Vaša
                pitanja i nedoumice, takođe zajedno radimo na projektima i
                pomažemo Vam da što pre i što bolje naučite da koristite web
                tehnologije.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
