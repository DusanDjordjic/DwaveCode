import BlogPost from "../../models/BlogPost";
import { dbConnect } from "../../middleware/db/dbConnect";

export default async function (req, res) {
  if (req.method === "GET") {
    try {
      dbConnect();
      const blogPosts = await BlogPost.find({});
      if (blogPosts.length < 1) {
        res.status(400).json({ error: "No Posts Found" });

        return;
      }

      res.status(200).json({ blogPosts });
    } catch (error) {
      console.log("***ERROR***", error);
      res.status(400).json({ error });
    }
  }
}
