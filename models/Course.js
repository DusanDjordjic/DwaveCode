import mongoose from "mongoose";
import { dbConnect } from "../middleware/db/dbConnect";
dbConnect();
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
  lections: {
    type: [lectionSchema],
    required: true,
  },
});
export default mongoose.models["Course"] ||
  mongoose.model("Course", courseSchema, "Courses");
