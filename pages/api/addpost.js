// MODELS
import BlogPost from "../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";
export default async function (req, res) {
  if (req.method === "POST") {
    try {
      const {
        title,
        description,
        editorPick,
        coverImage,
        tags,
        text,
        readTime,
      } = JSON.parse(req.body);
      console.log(JSON.parse(req.body));
      // Connect to DB
      const newEditorPick = editorPick === "true" ? true : false;

      let newTags = tags.replace(/\s+/g, "").split(",");
      newTags.push("sve");
      const newReadTime = parseInt(readTime);

      console.log();
      dbConnect();
      // Make New Blog Post
      const newPost = new BlogPost({
        title: title,
        date: new Date().getTime(),
        description: description,
        editorPick: newEditorPick,
        coverImage: coverImage,
        tags: newTags,
        text: text,
        overlay: {
          author: {
            name: "Dwave Code",
            authorImage: "/Dwave-logo.jpg",
          },
          readTime: newReadTime,
        },
      });
      // Save Blog Post
      const savedPost = await newPost.save();
      // Return Saved Blog Post
      res.status(200).json({ post: savedPost, error: false });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true, message: error });
    }
  } else {
    res.status(403).json({ error: `Method ${req.method} is Not Allowed` });
  }
}
