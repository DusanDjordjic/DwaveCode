import styles from "../../styles/kursevi/About.module.scss";
import Head from "next/head";
import Link from "next/link";
import CoursesNavigation from "../../components/courses/coursesNavigation/CoursesNavigation";
import Image from "next/image";
import { FaHandshake, FaPiggyBank } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { ImOffice } from "react-icons/im";
const About = () => {
  return (
    <>
      <Head>
        <title>Kursevi | Informacije</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.Section__LayoutContainer}>
          <div className={styles.Section__Layout}>
            <CoursesNavigation />
            <section className={styles.mainSection}>
              <h1>Informacije o kursevima</h1>
              <div className={styles.cardsWrapper}>
                {/* Card - Pristup */}
                <div className={styles.card}>
                  <MdMoneyOff />
                  <p>Besplatan pristup</p>
                  <p>
                    Svi kursevi na našem sajtu su 100% besplatni. Neograničen
                    vremenski pristup kursevima. Pitanja u okviru kursa možete
                    da radite koliko god puta želite. Bodovi stečeni na
                    pitanjima se nidge ne čuvaju, služe samo za vašu
                    orijentaciju koliko znate, a koliko ne.
                  </p>
                </div>
                {/* Card - Kontakt */}
                <div className={styles.card}>
                  <ImOffice />
                  <p>Radite na pravim projektima</p>
                  <p>
                    Tokom trajanja i nakon završetka kursa radićete na pravim
                    projektima. Organizacija je takva da će se na discordu svake
                    nedelje održavati druženje na kojem ćemo prvo odgovoriti na
                    sva Vaša pitanja, a zatim zajedno raditi na projektima.
                  </p>
                </div>
                {/* Card - Kontakt */}
                <div className={styles.card}>
                  <FaPiggyBank />
                  <p>Šansu da zaradite</p>
                  <p>
                    Nakon završetka kurseva ili kada se osećate da imate
                    dovoljno znanja da možete početi sa radom, mi ćemo Vas
                    testirati i ukoliko prođete test dobijate priliku da radite
                    na projektima i zaradite onoliko koliko ste uradili
                  </p>
                </div>
                {/* Card - Kontakt */}
                <div className={styles.card}>
                  <FaHandshake />
                  <p>Nova poznanstva</p>
                  <p>
                    Cela poenta dwavecode-a je da se developeri međusobno
                    upoznaju i da steknu prijatljstva. Lakše je učiti kada učite
                    sa nekim i kada možete nekog da pitate sve što vam nije
                    jasno. Zato se maksimalno trudimo da stvorimo prijateljsku
                    radnu atmosferu u okiviru našeg tima.
                  </p>
                </div>
              </div>
              <Link href="/kursevi/pocetna">Nazad</Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
