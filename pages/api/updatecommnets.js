import mongoose from "mongoose";
// MODELS
import CourseSchema from "../../models/Course";
import MessageSchema from "../../models/Message";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      // Connect to DB
      dbConnect();
      // Get data from body
      const { email, message, courseId, likes, from } = req.body;

      const updatedCourse = await CourseSchema.findByIdAndUpdate(courseId, {
        $push: { likes: likes, "content.comments": message },
      });
      const newMessage = new MessageSchema({
        from,
        message,
        email,
        grade: likes,
      });
      await newMessage.save();
      res.status(200).json({ message: "Success" });
    } catch (error) {
      // If error occurs return error
      console.log("***ERROR***", error);
      res.status(400).json({ error });
    }
  }
}
