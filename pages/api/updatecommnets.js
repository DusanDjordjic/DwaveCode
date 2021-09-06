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
      console.log("CID", courseId, typeof courseId);
      const id = mongoose.Types.ObjectId(courseId);
      console.log("CID2", id);
      console.log(mongoose.Types.ObjectId.isValid(id));
      const updatedCourse = await CourseSchema.findByIdAndUpdate(courseId, {
        $push: { likes: likes, "content.comments": message },
      });
      console.log(updatedCourse.likes);
      res.status(200).json({ message: "Success" });
    } catch (error) {
      // If error occurs return error
      console.log("***ERROR***", error);
      res.status(400).json({ error });
    }
  }
}
