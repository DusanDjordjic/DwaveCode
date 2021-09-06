import mongoose from "mongoose";
// MODELS
import CourseSchema from "../../models/Course";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      // Connect to DB
      dbConnect();
      // Get data from body
      const { email, message, courseId, likes } = req.body;

      const id = mongoose.Types.ObjectId(courseId);

      const updatedCourse = await CourseSchema.findByIdAndUpdate(courseId, {
        $push: { likes: likes, "content.comments": message },
      });

      res.status(200).json({ message: "Success" });
    } catch (error) {
      // If error occurs return error
      console.log("***ERROR***", error);
      res.status(400).json({ error });
    }
  }
}
