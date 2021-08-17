// STYLES
import styles from "../../styles/AllPosts.module.scss";
// ICONS

// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../../components/layout/smallComponents/button/Button";
import Line from "../../components/layout/smallComponents/line/Line";
import BlogHeader from "../../components/blog/blogHeader/BlogHeader";
import BlogButtons from "../../components/blog/blogButtons/BlogButtons";
import BlogNewsHeader from "../../components/blog/blogHeader/BlogSubHeader";
import BlogPost from "../../components/blog/blogPost/BlogPost";
import FeedbackCard from "../../components/feedback/FeedbackCard";
// URL CONFIG
import { server } from "../../config";
const Blog = ({ blogPosts, blogSubHeader }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Sve</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <BlogHeader />
        </section>
        <section className={styles.blogSection}>
          <BlogNewsHeader data={blogSubHeader} />
          <div className={styles.content}>
            {blogPosts.map((post, index) => {
              return <BlogPost key={index} data={post} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  try {
    dbConnect();
    const blogPosts = await BlogPost.find({});
    return {
      props: {
        blogPosts: blogPosts,
        blogSubHeader: {
          text: "Sve Objave",
          link: {
            url: "/blog",
            text: "Najnovije",
          },
        },
      },
    };
  } catch (error) {
    console.log("***ERROR***", error);
    return {
      props: {
        blogPosts: [],
        blogSubHeader: {
          text: "Sve Objave",
          link: {
            url: "/blog",
            text: "Najnovije",
          },
        },
      },
    };
  }
};
