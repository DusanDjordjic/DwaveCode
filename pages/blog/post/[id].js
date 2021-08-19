import BlogPostModel from "../../../models/BlogPost";
import styles from "../../../styles/PostPage.module.scss";
const ObjectId = require("mongoose").Types.ObjectId;
import { dbConnect } from "../../../middleware/db/dbConnect";
import { jsonify } from "../../../lib/jsonify";
import Image from "next/image";
import BlogHeader from "../../../components/blog/blogHeader/BlogHeader";
import MarkDownBox from "../../../components/markDown/MarkDownBox";
const SinglePost = ({ blogPost }) => {
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
};

export default SinglePost;

export async function getStaticProps(context) {
  const id = context.params.id;
  dbConnect();
  const blogPost = await BlogPostModel.findOne({ _id: new ObjectId(id) });
  return {
    props: {
      blogPost: jsonify(blogPost),
    },
  };
}

export async function getStaticPaths() {
  dbConnect();
  const blogPosts = await BlogPostModel.find({});
  return {
    paths: blogPosts.map((post) => {
      return { params: { id: `${post._id}` } };
    }),
    fallback: true,
  };
}
