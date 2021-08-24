// MODELS
import BlogPostModule from "../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";
export default async function (req, res) {
  try {
    // Connect to DB
    dbConnect();
    // Fetch BlogPosts
    const blogPosts = await BlogPostModule.find({});
    // Get all tags from blog posts
    let tags = [];
    blogPosts.forEach((post) => {
      tags = [...tags, ...post.tags];
    });
    const uniqueTags = [...new Set(tags)];

    return res.status(200).json({ tags: uniqueTags });
  } catch (error) {
    // If error occurs return status 500 and error
    res.status(500).json({error: error});
  }
}
