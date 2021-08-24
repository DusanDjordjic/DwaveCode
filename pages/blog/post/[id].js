// STYLES
import styles from "../../../styles/PostPage.module.scss";
// NEXT COMPONENTS
import Image from "next/image";
// CUSTOM COMPONENTS
import BlogHeader from "../../../components/blog/blogHeader/BlogHeader";
import MarkDownBox from "../../../components/markDown/MarkDownBox";
// MODELS
import BlogPostModel from "../../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../../middleware/db/dbConnect";
// LIB
import { jsonify } from "../../../lib/jsonify";
// OTHER
const ObjectId = require("mongoose").Types.ObjectId;
const SinglePost = ({ blogPost }) => {
  if (blogPost) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.header}>
            <BlogHeader />
            <div className={styles.imageWrapper}>
              <Image
                src={blogPost.coverImage}
                layout="responsive"
                height="500"
                width="809"
              />
            </div>
            <div className={styles.titleWrapper}>
              <h1>{blogPost.title}</h1>
              <div className={styles.authorWrapper}>
                <Image
                  src={blogPost.overlay.author.authorImage}
                  height="50"
                  width="50"
                />
                <p>Napisao {blogPost.overlay.author.name}</p>
              </div>
            </div>
          </section>
          <section>
            <MarkDownBox text={blogPost.text} />
          </section>
        </main>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default SinglePost;

export async function getStaticProps(context) {
  try {
    // Get id from params
    const id = context.params.id;
    // Connect to DB
    dbConnect();
    // Fetch BlogPost with id
    const blogPost = await BlogPostModel.findOne({ _id: new ObjectId(id) });
    return {
      // If there is no error return BlogPosts
      props: {
        blogPost: jsonify(blogPost),
      },
    };
  } catch (error) {
    return {
      // If there is an error return undefined
      props: {
        blogPost: undefined,
      },
    };
  }
}

export async function getStaticPaths() {
  // Connect to DB
  dbConnect();
  // Fetch BlogPosts
  const blogPosts = await BlogPostModel.find({});
  return {
    paths: blogPosts.map((post) => {
      return { params: { id: `${post._id}` } };
    }),
    fallback: true,
  };
}
