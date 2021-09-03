// STYLES
import styles from "../../../../../styles/kursevi/lection/SingleLection.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
// NEXT HOOKS
import { useRouter } from "next/router";
// CUSTOM COMPONENTS
import MarkDownBox from "../../../../../components/markDown/MarkDownBox";
// MIDDLEWARE
import { dbConnect } from "../../../../../middleware/db/dbConnect";
// MODELS
import CourseSchema from "../../../../../models/Course";
// LIB
import { jsonify } from "../../../../../lib/jsonify";
const Lection = ({
  currentLection,
  previousLectionId,
  nextLectionId,
  error,
}) => {
  const router = useRouter();
  const handleButtonClick = (text) => {
    let array = router.asPath.split("/");
    array.pop();
    array.push(text);
    const link = array.join("/");
    router.push(link);
  };
  if (!currentLection) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return (
      <div>
        <h1>Error : {error}</h1>
      </div>
    );
  }
  return (
    <>
      {/* Head */}
      <Head>
        <title>{currentLection.title}</title>
        <meta name="description" content={currentLection.text} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Container */}
      <div className={styles.container}>
        <div className={styles.Section__LayoutContainer}>
          <div className={styles.Section__Layout}>
            <section className={styles.introSection}>
              <div>
                <h1>{currentLection.title}</h1>

                <MarkDownBox text={currentLection.text} />
                <div className={styles.buttonWrapper}>
                  {previousLectionId && (
                    <button
                      onClick={() => handleButtonClick(previousLectionId)}
                    >
                      Prev
                    </button>
                  )}
                  {nextLectionId && (
                    <button onClick={() => handleButtonClick(nextLectionId)}>
                      Next
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lection;

export const getStaticProps = async (context) => {
  try {
    const { lectionid, id } = context.params;

    // Connect to DB
    dbConnect();
    // Fetch CourseArray
    const courseArray = await CourseSchema.find({});
    // Make Paths from corses Ids and Lections Ids
    let allLections;
    let previousLectionId;
    let currentLection;
    let currentLectionIndex;
    let nextLectionId;
    courseArray
      .filter((course) => course._id.toString() === id)
      .forEach((course) => {
        allLections = course.lections;
        course.lections.forEach((lection, index) => {
          if (lection._id.toString() === lectionid) {
            currentLectionIndex = index;
            currentLection = lection;
          }
        });
      });
    previousLectionId = allLections[currentLectionIndex - 1]?._id.toString();
    nextLectionId = allLections[currentLectionIndex + 1]?._id.toString();
    return {
      props: {
        previousLectionId: previousLectionId || "",
        nextLectionId: nextLectionId || "",
        currentLection: jsonify(currentLection),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: "error",
      },
    };
  }
};
export const getStaticPaths = async () => {
  // Connect to DB
  dbConnect();
  // Fetch CourseArray
  const courseArray = await CourseSchema.find({});
  // Make Paths from corses Ids and Lections Ids
  let paths = [];
  courseArray.forEach((course) => {
    course.lections.forEach((lection) => {
      paths.push({
        params: { id: `${course._id}`, lectionid: `${lection._id}` },
      });
    });
  });
  return {
    paths,
    fallback: true,
  };
};
