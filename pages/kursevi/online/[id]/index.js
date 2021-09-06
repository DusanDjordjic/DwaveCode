// STYLES
import styles from "../../../../styles/kursevi/OneCourse.module.scss";
// PACKEGES
import cooike from "js-cookie";
// NEXT COMPONENTS
import Image from "next/image";
import Head from "next/head";
// REACT HOOKS
import { useState } from "react";
// NEXT HOOKS
import { useRouter } from "next/router";
// REACT SCROLL COMPONENTS
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
// CUSTOM COMPONENTS
import Rate from "../../../../components/courses/rate/Rate";
import Button from "../../../../components/layout/smallComponents/button/Button";
import RoundButton from "../../../../components/layout/smallComponents/roundButton/RoundButton";
import ProfileCard from "../../../../components/people/ProfileCard";
import FeedbackCard2 from "../../../../components/OneTimeComponents/feedback/FeedbackCard2";
// ICONS
import {
  FaGlobeEurope,
  FaHourglassEnd,
  FaStopwatch,
  FaCheck,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
// MODELS
import CourseSchema from "../../../../models/Course";
// MIDDLEWARE
import { dbConnect } from "../../../../middleware/db/dbConnect";
// LIB
import { average } from "../../../../lib/average";
import { jsonify } from "../../../../lib/jsonify";
const Kurs = ({ course }) => {
  const [numberOfComments, setNumberOfComments] = useState(3);
  const router = useRouter();
  console.log(course);
  const displayMoreCommnets = () => {
    setNumberOfComments((prevValue) => prevValue + 3);
  };
  const addComment = async (email, message, likes) => {
    const response = await fetch("/api/updatecommnets", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        message: message,
        likes: likes,
        courseId: course._id.toString(),
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  if (course) {
    const averageLikes = average(course.likes);
    return (
      <>
        {/* Head */}
        <Head>
          <title>{course.title}</title>
          <meta
            name="description"
            content={`${course.description.slice(0, 57)}...`}
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Container */}
        <div className={styles.container}>
          <div className={styles.Section__LayoutContainer}>
            <div className={styles.Section__Layout}>
              {/* Intro Section */}
              <section className={styles.introSection}>
                {/* Content Wrapper */}
                <div className={styles.contentWrapper}>
                  {/* Intro Section Text Wrapper */}
                  <div className={styles.introSectionTextWrapper}>
                    <h1>{course.title}</h1>
                    {/* Rating Component */}
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
                  {/* Intro Section Image Wrapper */}
                  <div className={styles.introSectionImageWrapper}>
                    <Image
                      src={course.coverImage}
                      layout="responsive"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
                {/* Key Info Wrapper */}
                <div className={styles.keyInfoWrapper}>
                  {/* Key Info Item - Globe */}
                  <div className={styles.keyInfoItem}>
                    <span className={styles.keyInfoIconSpan}>
                      <FaGlobeEurope />
                    </span>
                    <p>
                      100% online <span>Neograničen pristup</span>
                    </p>
                  </div>
                  {/* Key Info Item - Hourglass */}
                  <div className={styles.keyInfoItem}>
                    <span className={styles.keyInfoIconSpan}>
                      <FaHourglassEnd />
                    </span>
                    <p>
                      Trajanje <span>{course.readTime}</span>
                    </p>
                  </div>
                  {/* Key Info Item - Stopwatch */}
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
            </div>
          </div>
          {/* Content Navigation */}
          <nav className={styles.contentNavigation}>
            <ul>
              {/* Nav Button - Pregled */}
              <li className={`${styles.navButton} ${styles.navButtonActive}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="pregled"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Pregled
                </ScrollLink>
              </li>
              {/* Nav Button - Lekicje */}
              <li className={`${styles.navButton}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="lekcije"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Lekcije
                </ScrollLink>
              </li>
              {/* Nav Button - Sta cu Nauciti */}
              <li className={`${styles.navButton}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="sta-cu-nauciti"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Šta ću naučiti
                </ScrollLink>
              </li>
              {/* Nav Button - Predavaci */}
              <li className={`${styles.navButton}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="predavaci"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Predavači
                </ScrollLink>
              </li>
              {/* Nav Button - Utisci */}
              <li className={`${styles.navButton}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="utisci"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Utisci
                </ScrollLink>
              </li>
              {/* Nav Button - Sta Dalje */}
              <li className={`${styles.navButton}`}>
                <ScrollLink
                  activeClass={styles.active}
                  to="sta-dalje"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Šta dalje
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className={styles.Section__LayoutContainer}>
            <div className={styles.Section__Layout}>
              {/* Content Section */}
              <section className={styles.contentSection}>
                {/* Content Wrapper */}
                <div className={styles.contentWrapper}>
                  {/* Scroll Element - Pregled */}
                  <ScrollElement
                    name="pregled"
                    className={`${styles.wrapperDiv} ${styles.pregledDiv}`}
                  >
                    <h2>Pregled</h2>
                    <p>{course.content.overview}</p>
                  </ScrollElement>
                  {/* Scroll Element - Lekcije */}
                  <ScrollElement
                    name="lekcije"
                    className={`${styles.wrapperDiv} ${styles.lekicjeDiv}`}
                  >
                    <h2>Lekcije</h2>
                    <div className={styles.lectionsWrapper}>
                      {course.lections.map((lection, index) => {
                        return (
                          <div key={index} className={styles.lectionCard}>
                            <div className={styles.courseNameDiv}>
                              <p>Kurs</p>
                              <p className={styles.courseName}>
                                {course.title}
                              </p>
                            </div>
                            <div className={styles.textWrapper}>
                              <div>
                                <p className={styles.lectionNumber}>
                                  lekcija {index + 1}
                                </p>
                                <h4>{lection.title}</h4>
                                <p>{lection.description}</p>
                              </div>
                              <div className={styles.buttonWrapper}>
                                <RoundButton
                                  link={`${router.asPath}/lekcije/${lection._id}`}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollElement>
                  {/* Scroll Element - Sta cu Nauciti */}
                  <ScrollElement
                    name="sta-cu-nauciti"
                    className={styles.wrapperDiv}
                  >
                    <h2>Šta ću naučiti</h2>
                    <div className={styles.znanjaWrapper}>
                      {course.content.knowledges.map((knowladge, index) => {
                        return (
                          <div className={styles.znanje} key={index}>
                            <FaCheck />
                            <p>{knowladge}</p>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollElement>
                  {/* Scroll Element - Predavaci */}
                  <ScrollElement name="predavaci" className={styles.wrapperDiv}>
                    <h2>Predavači</h2>
                    <div className={styles.teachersWrapper}>
                      {course.content.teachers.map((teacher, index) => {
                        return <ProfileCard key={index} data={teacher} />;
                      })}
                    </div>
                  </ScrollElement>
                  {/* Scroll Element - Utisci */}
                  <ScrollElement name="utisci" className={styles.wrapperDiv}>
                    <h2>Utisci</h2>
                    <div className={styles.commentsGrid}>
                      <div className={styles.commnetsWrapper}>
                        {course.content.comments.map((comment, index) => {
                          if (index < numberOfComments) {
                            return (
                              <div
                                className={styles.commentWrapper}
                                key={index}
                              >
                                <p className={styles.comments}>"{comment}"</p>
                              </div>
                            );
                          }
                        })}
                        {course.content.comments.length > numberOfComments && (
                          <div className={styles.showMoreWrapper}>
                            <button
                              onClick={() => displayMoreCommnets(2)}
                              className={styles.showMoreButton}
                            >
                              <MdKeyboardArrowDown />
                            </button>
                          </div>
                        )}
                      </div>
                      <FeedbackCard2
                        title={"Ostavite komentar"}
                        actionFunction={addComment}
                      />
                    </div>
                  </ScrollElement>
                  {/* Scroll Element - Sta Dalje */}
                  <ScrollElement name="sta-dalje" className={styles.wrapperDiv}>
                    <h2>Šta dalje</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit inventore iure cum dolore illo labore nihil
                      unde neque numquam sint repellendus ea ab, aliquam iusto
                      aperiam aspernatur odit minima in!
                    </p>
                  </ScrollElement>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export const getStaticProps = async (context) => {
  try {
    // Get id from params
    const courseId = context.params.id;
    // Connect to DB
    dbConnect();
    // Fetch Course By Id
    const course = await CourseSchema.findById(courseId);
    if (course) {
      // If there is no error ERROR=FALSE
      return {
        props: {
          course: jsonify(course),
          error: false,
          errorText: "",
        },
        revalidate: 60,
      };
    } else {
      // If there is an error ERROR=TRUE
      return {
        props: {
          course: {},
          error: true,
          errorText: "No course",
        },
        revalidate: 60,
      };
    }
  } catch (error) {
    // If there is an error ERROR=TRUE
    return {
      props: {
        course: {},
        error: true,
        errorText: error,
      },
      revalidate: 60,
    };
  }
};
export const getStaticPaths = async () => {
  // Connect to DB
  dbConnect();
  // Fetch CourseArray
  const courseArray = await CourseSchema.find({});
  return {
    paths: courseArray.map((item) => {
      return {
        params: {
          id: `${item._id}`,
        },
      };
    }),
    fallback: true,
  };
};
export default Kurs;
