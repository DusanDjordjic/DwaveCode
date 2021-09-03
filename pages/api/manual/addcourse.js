// MODELS
import CourseSchema from "../../../models/Course";
// MIDDLEWARE
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  try {
    // Connect to DB
    dbConnect();
    // Make new Course
    const newCourse = new CourseSchema({
      title: "Uvod u JavaScript",
      description:
        "U ovom kursu pokrićemo osnove javascript jezika. Varijable, grananje, petlje, funkcije, DOM manipulacije itd...",
      quote: "Javascript je mozak iza cele operacije",
      coverImage: "/Cards/Card-Design-03.jpg",
      readTime: " 13h 00min",
      weeklyStudy: "4h 20min",
      likes: [],
      content: {
        overview:
          " Nulla ultrices, lorem vitae egestas ultricies, metus sapien facilisis odio, ac finibus risus elit sit amet sem. Vestibulum accumsan mi massa, eu consequat tortor sodales vitae. Proin aliquam massa vel sapien consectetur, eget vehicula nibh finibus.",
        knowledges: [
          "Prvo znanje koje cu steci",
          "Drugo znanje koje cu steci",
          "Trece znanje koje cu steci",
          "Cetvrto znanje koje cu steci",
          "Peto znanje koje cu steci",
          "Sesto znanje koje cu steci",
        ],
        teachers: [
          {
            teacherName: "Dusan Djordjic",
            teacherDescription:
              "Full stack web developer, osnivac Dwavecode-a, student fakulteta organizacionih nauka",
            teacherQuote:
              "Ucenjem spoznajes svet i njegove mogucnosti. Zato treba uciti, a ne za ocenu.",
            teacherImage: "/Dwave-logo.jpg",
          },
        ],
        comments: [
          "Komentar 1",
          "Komentar 2",
          "Komentar 3",
          "Komentar 4",
          "Komentar 5",
        ],
      },
      lections: [
        {
          title: "Naslov lekcije 1",
          text: "Tekst lekcije 1",
          questions: [
            {
              question: "Pitanje 1.1 css",
              answers: [
                {
                  answerText: "odgovor 1.1.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.1.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.1.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.1.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 1,
              rightAnswerDescription:
                "Odgovor po 1 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 1.2 css",
              answers: [
                {
                  answerText: "odgovor 1.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.2.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 1.3 css",
              answers: [
                {
                  answerText: "odgovor 1.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.3.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.3.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 2,
              rightAnswerDescription:
                "Odgovor po 2 je tacan zato sto blabla css",
            },
          ],
        },
        {
          title: "Naslov lekcije 2",
          text: "Tekst lekcije 2",
          questions: [
            {
              question: "Pitanje 2.1 css",
              answers: [
                {
                  answerText: "odgovor 1.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.2.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 1,
              rightAnswerDescription:
                "Odgovor po 1 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 2.2 css",
              answers: [
                {
                  answerText: "odgovor 2.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 2.2.4 css",
                  answerId: 4,
                },
                {
                  answerText: "odgovor 2.2.5 css",
                  answerId: 5,
                },
              ],
              rightAnswer: 5,
              rightAnswerDescription:
                "Odgovor po 5 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 2.3 css",
              answers: [
                {
                  answerText: "odgovor 2.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.3.3 css",
                  answerId: 3,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
          ],
        },
        {
          title: "Naslov lekcije 3",
          text: "Tekst lekcije 3",
          questions: [
            {
              question: "Pitanje 3.1 css",
              answers: [
                {
                  answerText: "odgovor 1.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.2.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 2,
              rightAnswerDescription:
                "Odgovor po 2 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 3.2 css",
              answers: [
                {
                  answerText: "odgovor 2.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 2.2.4 css",
                  answerId: 4,
                },
                {
                  answerText: "odgovor 2.2.5 css",
                  answerId: 5,
                },
              ],
              rightAnswer: 5,
              rightAnswerDescription:
                "Odgovor po 5 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 3.3 css",
              answers: [
                {
                  answerText: "odgovor 2.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.3.3 css",
                  answerId: 3,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 3.4 css",
              answers: [
                {
                  answerText: "odgovor 2.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.3.3 css",
                  answerId: 3,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
          ],
        },
        {
          title: "Naslov lekcije 4",
          text: "Tekst lekcije 4",
          questions: [
            {
              question: "Pitanje 4.1 css",
              answers: [
                {
                  answerText: "odgovor 1.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 1.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 1.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 1.2.4 css",
                  answerId: 4,
                },
              ],
              rightAnswer: 2,
              rightAnswerDescription:
                "Odgovor po 2 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 4.2 css",
              answers: [
                {
                  answerText: "odgovor 2.2.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.2.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.2.3 css",
                  answerId: 3,
                },
                {
                  answerText: "odgovor 2.2.4 css",
                  answerId: 4,
                },
                {
                  answerText: "odgovor 2.2.5 css",
                  answerId: 5,
                },
              ],
              rightAnswer: 5,
              rightAnswerDescription:
                "Odgovor po 5 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 4.3 css",
              answers: [
                {
                  answerText: "odgovor 2.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.3.3 css",
                  answerId: 3,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
            {
              question: "Pitanje 4.4 css",
              answers: [
                {
                  answerText: "odgovor 2.3.1 css",
                  answerId: 1,
                },
                {
                  answerText: "odgovor 2.3.2 css",
                  answerId: 2,
                },
                {
                  answerText: "odgovor 2.3.3 css",
                  answerId: 3,
                },
              ],
              rightAnswer: 3,
              rightAnswerDescription:
                "Odgovor po 3 je tacan zato sto blabla css",
            },
          ],
        },
      ],
    });
    // Save Course
    const savedCourse = await newCourse.save();
    // Return saved Course
    res.status(200).json({ course: savedCourse });
  } catch (error) {
    // If error occurs return status 500 and Error
    res.status(500).json({ error: error });
  }
}
