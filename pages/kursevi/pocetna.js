import styles from "../../styles/kursevi/Index.module.scss";
import Head from "next/head";
import Image from "next/image";
import Button from "../../components/layout/smallComponents/button/Button";
import CoursesNavigation from "../../components/courses/coursesNavigation/CoursesNavigation";
import onlineLectionsSrc from "../../public/onlineLections.svg";
import { FaHandshake, FaPiggyBank } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GiShare } from "react-icons/gi";
import Link from "next/link";
import courseSrc1 from "../../public/Cards/Card-Design-01.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const KurseviPocetna = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kursevi | početna</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.introWrapper}>
        <section className={styles.introSection}>
          <CoursesNavigation />
          <div className={styles.contentWrapper}>
            <div className={styles.introSectionTextWrapper}>
              <h1>Dobrodosli na Dwavecode kurseve</h1>
              <h3>Kursevi za sve koji žele da nauče i nešto zarade</h3>
              <p>
                Potpuno besplanti kursevi o veb-programiranju Nadamo se da ćemo
                vas upoznati i raditi sa vama
              </p>
              <Button text="Pogledaj kurseve" link="/kursevi" />
            </div>
            <div className={styles.introSectionImageWrapper}>
              <Image src={onlineLectionsSrc} layout="responsive" />
            </div>
          </div>
        </section>
      </div>
      <main className={styles.main}>
        <section className={styles.ourServiceSection}>
          <div className={styles.ourServiceSectionTextWrapper}>
            <h2>Šta vam se sve nudimo u okviru kurseva</h2>
            <p>
              Najbolji, potpuno besplatni, kursevi na Balkanu za Balkance. Sve
              što vam je potrebno je malo dobre volje za ostalo smo se pobrinuli
              mi.
            </p>
            <Button text="Saznajte više" link="/kursevi" />
          </div>
          <div className={styles.ourServiceSectionCardsWrapper}>
            <div className={styles.card}>
              <Link href="/kontakt">
                <a>
                  <MdMoneyOff />
                  <p>Besplatan pristup</p>
                  <p>Svi kursevi na našem sajtu su 100% besplatni</p>
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/kontakt">
                <a>
                  <ImOffice />
                  <p>Radite na pravim projektima</p>
                  <p>Dok učite dobijaćete realne zadatke i primere iz života</p>
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/kontakt">
                <a>
                  <FaPiggyBank />
                  <p>Šansu da zaradite</p>
                  <p>
                    Nakon završetka kurseva možete postati član naše freelance
                    grupe
                  </p>
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/kontakt">
                <a>
                  <FaHandshake />
                  <p>Nova poznanstva</p>
                  <p>Upoznaćete nas kroz live lekcije i discord druženja</p>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className={styles.coursesSection}>
          <h2>Naši kursevi</h2>
          <div className={styles.coursesSectionCardsWrapper}>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageGradient}></div>
                  <Image
                    src="/Cards/Card-Design-01.jpg"
                    height="100"
                    width="100"
                    layout="responsive"
                  />
                </div>
                <div className={styles.textWrapper}>
                  <h3>HTML kurs</h3>
                  <p>12 lekcija / 3h 45min</p>
                  <p className={styles.descSubheader}>Deskripcija</p>
                  <p>
                    U ovom kursu naučićete sve od najosnovnijih znanja iz html-a
                    kako napraviti .html fajl, kako ga otvoriti u pretraživaču
                    itd. Do Naprednijih stvari koje se tiču linkova, kako
                    funkcionišu adrese, slaganje i pozicioniranje elemenata.
                  </p>
                  <p className={styles.courseQuote}>
                    Html za sajt je kao skelet za čoveka
                  </p>
                </div>
                <div className={styles.footer}>
                  <button className={styles.linkButton}>
                    <MdKeyboardArrowRight />
                    Započni
                  </button>
                  <button className={styles.shareButton}>
                    <GiShare />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageGradient}></div>
                  <Image
                    src="/Cards/Card-Design-01.jpg"
                    height="100"
                    width="100"
                    layout="responsive"
                  />
                </div>
                <div className={styles.textWrapper}>
                  <h3>HTML kurs</h3>
                  <p>12 lekcija / 3h 45min</p>
                  <p className={styles.descSubheader}>Deskripcija</p>
                  <p>
                    U ovom kursu naučićete sve od najosnovnijih znanja iz html-a
                    kako napraviti .html fajl, kako ga otvoriti u pretraživaču
                    itd. Do Naprednijih stvari koje se tiču linkova.
                  </p>
                  <p className={styles.courseQuote}>
                    Html za sajt je kao skelet za čoveka
                  </p>
                </div>
                <div className={styles.footer}>
                  <button className={styles.linkButton}>
                    <MdKeyboardArrowRight />
                    Započni
                  </button>
                  <button className={styles.shareButton}>
                    <GiShare />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default KurseviPocetna;
