import styles from "../../styles/kursevi/Index.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/layout/smallComponents/button/Button";
import CoursesNavigation from "../../components/courses/coursesNavigation/CoursesNavigation";
import onlineLectionsSrc from "../../public/onlineLections.svg";
import { FaHandshake, FaPiggyBank } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GiShare } from "react-icons/gi";
import { courses } from "../../data/courses";
import { MdKeyboardArrowRight } from "react-icons/md";
import CourseSchema from "../../models/Course";
import { dbConnect } from "../../middleware/db/dbConnect";
const KurseviPocetna = ({ coursesArray, error }) => {
  if (!error) {
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
                  Potpuno besplanti kursevi o veb-programiranju Nadamo se da
                  ćemo vas upoznati i raditi sa vama
                </p>
                <Button text="Pogledaj kurseve" link="/kursevi" />
              </div>
              <div className={styles.introSectionImageWrapper}>
                <Image
                  src={onlineLectionsSrc}
                  priority={true}
                  layout="responsive"
                />
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
                što vam je potrebno je malo dobre volje za ostalo smo se
                pobrinuli mi.
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
                    <p>
                      Dok učite dobijaćete realne zadatke i primere iz života
                    </p>
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
              {coursesArray.map((kurs) => {
                return (
                  <div key={kurs._id} className={styles.cardWrapper}>
                    <div className={styles.card}>
                      <div className={styles.imageWrapper}>
                        <div className={styles.imageGradient}></div>
                        <Image
                          src={kurs.coverImage}
                          height="100"
                          width="100"
                          layout="responsive"
                          alt={kurs.title}
                        />
                      </div>
                      <div className={styles.textWrapper}>
                        <h3>{kurs.title}</h3>
                        <p>{`${kurs.lections.length} lekcija / ${kurs.readTime}`}</p>
                        <p className={styles.descSubheader}>Deskripcija</p>
                        <p>{kurs.description}</p>
                        <p className={styles.courseQuote}>{kurs.quote}</p>
                      </div>
                      <div className={styles.footer}>
                        <Link href={`/kursevi/online/${kurs._id}`}>
                          <a className={styles.linkButton}>
                            <MdKeyboardArrowRight />
                            Započni
                          </a>
                        </Link>
                        <button
                          className={styles.shareButton}
                          onClick={() =>
                            console.log(`${kurs.title} kopirano u clipboard`)
                          }
                        >
                          <GiShare />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default KurseviPocetna;

export const getStaticProps = async () => {
  dbConnect();
  try {
    const coursesArray = await CourseSchema.find({});
    return {
      props: {
        coursesArray: JSON.parse(JSON.stringify(coursesArray)),
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        coursesArray: [],
        error: true,
      },
    };
  }
};
