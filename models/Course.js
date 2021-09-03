import mongoose from "mongoose";
import { dbConnect } from "../middleware/db/dbConnect";
dbConnect();

const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  teacherDescription: {
    type: String,
    required: true,
  },
  teacherQuote: {
    type: String,
    required: true,
  },
  teacherImage: {
    type: String,
    required: true,
  },
});

const contentSchema = new mongoose.Schema({
  overview: {
    type: String,
    required: true,
  },
  knowledges: {
    type: [String],
    required: true,
  },
  teachers: {
    type: [teacherSchema],
    required: true,
  },
  comments: {
    type: [String],
    required: true,
  },
});

const answerSchema = new mongoose.Schema({
  answerText: {
    type: String,
    required: true,
  },
  answerId: {
    type: Number,
    required: true,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [answerSchema],
    required: true,
  },
  rightAnswer: {
    type: Number,
    required: true,
  },
  rightAnswerDescription: {
    type: String,
    required: true,
  },
});

const lectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
  weeklyStudy: {
    type: String,
    required: true,
  },
  likes: {
    type: [Number],
  },
  content: contentSchema,
  lections: {
    type: [lectionSchema],
    required: true,
  },
});
export default mongoose.models["Course"] ||
  mongoose.model("Course", courseSchema, "Courses");
