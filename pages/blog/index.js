// STYLES
import styles from "../../styles/Blog.module.scss";
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
// MONGOOSE
import BlogPost from "../../models/BlogPost";
import { dbConnect } from "../../middleware/db/dbConnect";
// URL CONFIG
import { server } from "../../config";
const Blog = ({ blogPosts, blogSubHeader }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwave Code | Blog</title>
        <meta
          name="description"
          content="Dwavecode želi da pomogne ljudima da uđu u svet ved programiranja na najlaši mogući način"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.introSection}>
          <BlogHeader />
          <div className={styles.introSectionText}>
            <h1>Dwave Code Blog</h1>
            <h2>Sve o web programiranju na jednom mestu</h2>
          </div>
          <BlogButtons />
        </section>
        <section className={styles.blogSection}>
          <BlogNewsHeader data={blogSubHeader} />
          <div className={styles.content}>
            <div className={styles.contentMain}>
              <BlogPost data={blogPosts[0]} type="big" />
            </div>
            <div className={styles.contentSidebar}>
              {blogPosts.map((post, index) => {
                if (index !== 0 && index < 3) {
                  return <BlogPost key={index} data={post} />;
                }
              })}
            </div>
          </div>
        </section>

        <section className={styles.feedbackSection}>
          <FeedbackCard />
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
          text: "Najnovije",
          link: {
            url: "/blog/svi-postovi",
            text: "Pogledaj sve",
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
          text: "GRESKA",
          link: {
            url: "/blog/svi-postovi",
            text: "Pogledaj sve",
          },
        },
      },
    };
  }
};
