import { jsonify } from "../../../../lib/jsonify";
import { dbConnect } from "../../../../middleware/db/dbConnect";
import CourseSchema from "../../../../models/Course";
import Rate from "../../../../components/courses/rate/Rate";
import { useState } from "react";
import styles from "../../../../styles/kursevi/OneCourse.module.scss";
import Image from "next/image";
import Button from "../../../../components/layout/smallComponents/button/Button";
import { FaGlobeEurope, FaHourglassEnd, FaStopwatch } from "react-icons/fa";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import { average } from "../../../../lib/average";
const Kurs = ({ course }) => {
  const averageLikes = average(course.likes);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <div className={styles.introSectionTextWrapper}>
            <h1>{course.title}</h1>
            <div className={styles.ratingContainer}>
              <Rate
                rating={Math.floor(averageLikes)}
                onRating={() => console.log("Hello")}
                isStatic={true}
              />
              <p>
                {averageLikes.toFixed(1)}({course.likes.length} ocena)
              </p>
            </div>
            <p className={styles.description}>{course.description}</p>
            <Button text="Počni sa učenjem" link="/" />
          </div>
          <div className={styles.introSectionImageWrapper}>
            <Image
              src={course.coverImage}
              layout="responsive"
              height={100}
              width={100}
            />
          </div>
          <div className={styles.keyInfoWrapper}>
            <div className={styles.keyInfoItem}>
              <span className={styles.keyInfoIconSpan}>
                <FaGlobeEurope />
              </span>
              <p>
                100% online <span>Neograničen pristup</span>
              </p>
            </div>
            <div className={styles.keyInfoItem}>
              <span className={styles.keyInfoIconSpan}>
                <FaHourglassEnd />
              </span>
              <p>
                Trajanje <span>{course.readTime}</span>
              </p>
            </div>
            <div className={styles.keyInfoItem}>
              <span className={styles.keyInfoIconSpan}>
                <FaStopwatch />
              </span>
              <p>
                Nedeljno učenje <span>{course.weeklyStudy}</span>
              </p>
            </div>
          </div>
        </section>
        <nav className={styles.contentNavigation}>
          <ul>
            <li className={`${styles.navButton} ${styles.navButtonActive}`}>
              <ScrollLink
                activeClass={styles.active}
                to="pregled"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Pregled
              </ScrollLink>
            </li>
            <li className={`${styles.navButton}`}>
              <ScrollLink
                activeClass={styles.active}
                to="lekcije"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Lekcije
              </ScrollLink>
            </li>
            <li className={`${styles.navButton}`}>
              <ScrollLink
                activeClass={styles.active}
                to="sta-cu-nauciti"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Šta ću naučiti
              </ScrollLink>
            </li>
            <li className={`${styles.navButton}`}>
              <ScrollLink
                activeClass={styles.active}
                to="predavaci"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Predavači
              </ScrollLink>
            </li>
            <li className={`${styles.navButton}`}>
              <ScrollLink
                activeClass={styles.active}
                to="utisci"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Utisci
              </ScrollLink>
            </li>
            <li className={`${styles.navButton}`}>
              <ScrollLink
                activeClass={styles.active}
                to="sta-dalje"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Šta dalje
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <section className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            <ScrollElement name="pregled" className={styles.wrapperDiv}>
              <h2>Pregled</h2>
              <p>{course.content.overview}</p>
            </ScrollElement>
            <ScrollElement name="lekcije" className={styles.wrapperDiv}>
              <h2>Lekcije</h2>
              {course.lections.map((lection, index) => {
                return (
                  <div key={index}>
                    <h4>{lection.title}</h4>
                    <p>{lection.text}</p>
                  </div>
                );
              })}
            </ScrollElement>
            <ScrollElement name="sta-cu-nauciti" className={styles.wrapperDiv}>
              <h2>Šta ću naučiti</h2>
              {course.content.knowledges.map((knowladge, index) => {
                return <p key={index}>{knowladge}</p>;
              })}
            </ScrollElement>
            <ScrollElement name="predavaci" className={styles.wrapperDiv}>
              <h2>Predavači</h2>
              {course.content.teachers.map((teacher, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={teacher.teacherImage}
                      height="100"
                      width="100"
                    />
                    <p>{teacher.teacherName}</p>
                    <p>{teacher.teacherDescription}</p>
                    <p>{teacher.teacherQuote}</p>
                  </div>
                );
              })}
            </ScrollElement>
            <ScrollElement name="utisci" className={styles.wrapperDiv}>
              <h2>Utisci</h2>
              {course.content.comments.map((comment, index) => {
                return <p key={index}>{comment}</p>;
              })}
            </ScrollElement>
            <ScrollElement name="sta-dalje" className={styles.wrapperDiv}>
              <h2>Šta dalje</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit inventore iure cum dolore illo labore nihil unde
                neque numquam sint repellendus ea ab, aliquam iusto aperiam
                aspernatur odit minima in!
              </p>
            </ScrollElement>
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const courseId = context.params.id;
  dbConnect();
  try {
    const course = await CourseSchema.findById(courseId);
    if (course) {
      return {
        props: {
          course: jsonify(course),
          error: false,
          errorText: "",
        },
      };
    } else {
      return {
        props: {
          course: {},
          error: true,
          errorText: "No course",
        },
      };
    }
  } catch (error) {
    return {
      props: {
        course: {},
        error: true,
        errorText: error,
      },
    };
  }
};
export const getStaticPaths = async () => {
  dbConnect();
  const courseArray = await CourseSchema.find({});
  return {
    paths: courseArray.map((item) => {
      return {
        params: {
          id: `${item._id}`,
        },
      };
    }),
    fallback: false,
  };
};
export default Kurs;
// [{ params: { id: "61227b9648dd08286c891850" } }]
