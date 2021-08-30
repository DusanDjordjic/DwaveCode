import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
});

const overlaySchema = new mongoose.Schema({
  author: {
    type: authorSchema,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  editorPick: {
    type: Boolean,
    default: false,
  },
  coverImage: {
    type: String,
    required: true,
  },
  overlay: {
    type: overlaySchema,
    required: true,
  },
});

export default mongoose.models["BlogPost"] ||
  mongoose.model("BlogPost", postSchema, "BlogPosts");
