// MODELS
import BlogPost from "../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      // Connect to DB
      dbConnect();
      // Fetch BlogPosts
      const blogPosts = await BlogPost.find({});
      // If there is no blogPosts return error
      if (blogPosts.length < 1) {
        res.status(400).json({ error: "No Posts Found" });
        return;
      }
      res.status(200).json({ blogPosts: JSON.stringify(blogPosts) });
    } catch (error) {
      // If error occurs return error
      console.log("***ERROR***", error);
      res.status(400).json({ error });
    }
  }
}
