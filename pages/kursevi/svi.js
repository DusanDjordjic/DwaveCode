// STYLES
import styles from "../../styles/kursevi/All.module.scss";
// CUSTOM COMPONENTS
import Button from "../../components/layout/smallComponents/button/Button";
import CoursesNavigation from "../../components/courses/coursesNavigation/CoursesNavigation";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// ICONS
import { GiShare } from "react-icons/gi";
// MODELS
import CourseSchema from "../../models/Course";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";
const Svi = ({ error, coursesArray }) => {
  if (error) {
    return <h1>Greska</h1>;
  }
  return (
    <>
      {/* Head */}
      <Head>
        <title>Kursevi | Svi</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Container */}
      <div className={styles.container}>
        <div className={styles.Section__LayoutContainer}>
          <div className={styles.Section__Layout}>
            {/* Main */}
            <main className={styles.main}>
              {/* Intro Section */}
              <section className={styles.introSection}>
                <CoursesNavigation />
              </section>
              <section className={styles.coursesSection}>
                <h2>Svi kursevi</h2>
                <div className={styles.coursesSectionCardsWrapper}>
                  {/* Mapping courses */}
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
                            <p>{`${kurs.lections.length} 
                              ${
                                kurs.lections.length < 5 ? "lekcije" : "lekcija"
                              } / ${kurs.readTime}`}</p>
                            <p className={styles.descSubheader}>Deskripcija</p>
                            <p>{kurs.description}</p>
                            <p className={styles.courseQuote}>{kurs.quote}</p>
                          </div>
                          <div className={styles.footer}>
                            <Button
                              text="Započni"
                              link={`/kursevi/online/${kurs._id}`}
                              isDisabled={false}
                            />

                            <button
                              className={styles.shareButton}
                              onClick={() =>
                                console.log(
                                  `${kurs.title} kopirano u clipboard`
                                )
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
        </div>
      </div>
    </>
  );
};

export default Svi;

export const getStaticProps = async () => {
  try {
    dbConnect();
    const coursesArray = await CourseSchema.find({});
    // Check if there is any courses
    if (coursesArray.length !== 0) {
      // if yes ERROR=FALSE
      return {
        props: {
          coursesArray: JSON.parse(JSON.stringify(coursesArray)),
          error: false,
        },
      };
    } else {
      // if not ERROR=TRUE
      return {
        props: {
          coursesArray: [],
          error: true,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        error: true,
        text: error,
      },
    };
  }
};
