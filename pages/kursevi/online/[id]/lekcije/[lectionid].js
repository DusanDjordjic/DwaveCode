// STYLES
import styles from "../../../../../styles/kursevi/lection/SingleLection.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
// REACT HOOKS
import { useState, useEffect } from "react";
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

  // Set state for questions
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [answerDescription, setAnswerDescription] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (currentLection.questions[questionIndex + 1] === undefined) {
      setIsFinished(true);
    }
  }, [questionIndex]);
  const handleSubmit = () => {
    if (
      selectedAnswer === currentLection.questions[questionIndex].rightAnswer
    ) {
      console.log("Tacno");
      setScore((prevValue) => prevValue + 1);
    } else {
      console.log("Netacno");
    }
    setAnswerDescription(
      currentLection.questions[questionIndex].rightAnswerDescription
    );
    setIsSubmited(true);
  };
  const nextQuestion = () => {
    setQuestionIndex((prevValue) => prevValue + 1);
    setSelectedAnswer(0);
    setAnswerDescription("");
    setIsSubmited(false);
  };
  const restartQuestions = () => {
    setQuestionIndex(0);
    setSelectedAnswer(0);
    setAnswerDescription("");
    setIsSubmited(false);
    setIsFinished(false);
    setScore(0);
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
                      Prethodna lekcija
                    </button>
                  )}
                  {nextLectionId && (
                    <button onClick={() => handleButtonClick(nextLectionId)}>
                      Sledeća lekcija
                    </button>
                  )}
                </div>
              </div>
            </section>
            <section className={styles.questionsSection}>
              <div className={styles.questionBox}>
                <header>
                  <p>
                    Pitanje: {questionIndex + 1} od{" "}
                    {currentLection.questions.length}
                  </p>
                  <p>Bodovi: {score}</p>
                </header>
                <div className={styles.answers}>
                  <h4>
                    {questionIndex + 1}.{" "}
                    {currentLection.questions[questionIndex].question}
                  </h4>
                  <ul>
                    {currentLection.questions[questionIndex].answers.map(
                      (answer, index) => {
                        return (
                          <li
                            className={`${
                              selectedAnswer === answer.answerId &&
                              styles.active
                            } ${
                              isSubmited
                                ? currentLection.questions[questionIndex]
                                    .rightAnswer === answer.answerId
                                  ? styles.right
                                  : styles.wrong
                                : ""
                            }`}
                            key={index}
                            onClick={() => setSelectedAnswer(answer.answerId)}
                          >
                            {answer.answerText}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                <footer>
                  <div className={isSubmited ? styles.textWrapper : ""}>
                    <p>{answerDescription}</p>
                  </div>
                  <div className={styles.buttonsWrapper}>
                    <button
                      onClick={handleSubmit}
                      className={styles.submitButton}
                    >
                      Odgovori
                    </button>
                    {isFinished ? (
                      ""
                    ) : (
                      <button
                        onClick={nextQuestion}
                        className={styles.nextButton}
                      >
                        Sledece pitanje
                      </button>
                    )}
                    {isFinished && isSubmited ? (
                      <button
                        onClick={restartQuestions}
                        className={styles.nextButton}
                      >
                        Ponovo
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </footer>
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
