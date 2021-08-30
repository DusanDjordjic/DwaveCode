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
      title: "Funkcije | Šta su i kako ih koristiti",
      date: new Date().getTime(),
      description:
        "Naučićemo šta su funkcije, zašto su toliko moćne i kako da ih koristimo na najbolji način",
      editorPick: true,
      coverImage: "/Blog/Html/1.png",
      tags: ["sve", "javascript"],
      text: "# Javascript",
      overlay: {
        author: {
          name: "Dwave Code",
          authorImage: "/Dwave-logo.jpg",
        },
        readTime: 5,
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
