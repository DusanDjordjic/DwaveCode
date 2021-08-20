import BlogPostModule from "../../models/BlogPost";
import { dbConnect } from "../../middleware/db/dbConnect";
export default async function (req, res) {
  try {
    dbConnect();
    const blogPosts = await BlogPostModule.find({});
    let tags = [];
    blogPosts.forEach((post) => {
      tags = [...tags, ...post.tags];
    });
    const uniqueTags = [...new Set(tags)];

    return res.status(200).json({ tags: uniqueTags });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}
