import BlogPost from "../../../models/BlogPost";
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  dbConnect();
  const newPost = new BlogPost({
    title: "css",
    date: new Date(2021, 7, 19).getTime(),
    description: "U uvodu ćemo pogledati šta je to html i kako funkcioniše",
    coverImage: "/Blog/Html/1.png",
    tags: ["sve", "css"],
    text: "# CSS Kurs",
    overlay: {
      author: {
        name: "Dwave Code",
        authorImage: "/Dwave-logo.jpg",
      },
      readTime: 5,
    },
  });

  const savedPost = await newPost.save();
  res.status(200).json({ post: savedPost });
}
