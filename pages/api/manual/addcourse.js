import CourseSchema from "../../../models/Course";
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  dbConnect();
  const newCourse = new CourseSchema({
    title: "Uvod u Css",
    description:
      "U ovom kursu naučićete sve od najosnovnijih znanja iz html-a kako napraviti .html fajl, kako ga otvoriti u pretraživaču itd. Do Naprednijih stvari koje se tiču linkova.",
    quote: "Dizajn je vidljiva inteligencija",
    coverImage: "/Cards/Card-Design-02.jpg",
    readTime: " 4h 00min",
    likes: [],
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
            rightAnswerDescription: "Odgovor po 1 je tacan zato sto blabla css",
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
            rightAnswerDescription: "Odgovor po 3 je tacan zato sto blabla css",
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
            rightAnswerDescription: "Odgovor po 2 je tacan zato sto blabla css",
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
            rightAnswerDescription: "Odgovor po 1 je tacan zato sto blabla css",
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
            rightAnswerDescription: "Odgovor po 5 je tacan zato sto blabla css",
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
            rightAnswerDescription: "Odgovor po 3 je tacan zato sto blabla css",
          },
        ],
      },
    ],
  });

  const savedCourse = await newCourse.save();
  res.status(200).json({ course: savedCourse });
}
