import BlogPost from "../../../models/BlogPost";
import { dbConnect } from "../../../middleware/db/dbConnect";
export default async function (req, res) {
  dbConnect();
  const newPost = new BlogPost({
    title: "css - daj stila svom veb-sajtu!",
    date: new Date(2021, 7, 16).getTime(),
    description: "Nakon HTML-a sledi CSS koji se koristi za stilizovanje.",
    coverImage: "/style.png",
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
