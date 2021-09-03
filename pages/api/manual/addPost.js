// MODELS
import BlogPost from "../../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  try {
    // Connect to DB
    dbConnect();
    // Make New Blog Post
    const newPost = new BlogPost({
      title: "HTML 5",
      date: new Date().getTime(),
      description: "Post broj 5 iz html-a",
      editorPick: false,
      coverImage: "/Blog/Html/1.png",
      tags: ["sve", "html"],
      text: "# Html 5",
      overlay: {
        author: {
          name: "Dwave Code",
          authorImage: "/Dwave-logo.jpg",
        },
        readTime: 4,
      },
    });
    // Save Blog Post
    const savedPost = await newPost.save();
    // Return Saved Blog Post
    res.status(200).json({ post: savedPost });
  } catch (error) {
    // If error occurs return status 500 and Error
    res.status(200).json({ error: error });
  }
}
