// STYLES
import styles from "../../styles/Blog.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
// CUSTOM COMPONENTS
import BlogHeader from "../../components/blog/blogHeader/BlogHeader";
import BlogButtons from "../../components/blog/blogButtons/BlogButtons";
import BlogNewsHeader from "../../components/blog/blogHeader/BlogSubHeader";
import BlogPost from "../../components/blog/blogPost/BlogPost";
import FeedbackCard from "../../components/OneTimeComponents/feedback/FeedbackCard";
// MODELS
import BlogPostModel from "../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";
// LIB
import { jsonify } from "../../lib/jsonify";
const Blog = ({ blogPosts, blogSubHeader }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwave Code | Blog</title>
        <meta
          name="description"
          content="Tekstovi na temu veb-programiranja, resenja kompleksinh problema i razne druge stvari"
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

export const getStaticProps = async () => {
  try {
    // Connect to DB
    dbConnect();
    // Fetch BlogPosts
    const blogPosts = await BlogPostModel.find({});
    if(blogPosts.length !== 0){
      // If there is a blogPosts
      return {
        props: {
          blogPosts: jsonify(blogPosts),
          blogSubHeader: {
            text: "Najnovije",
            link: {
              url: "/blog/svi-postovi",
              text: "Pogledaj sve",
            },
          },
        },
        revalidate: 60 * 30
      };
    }else{
      // If there is no blogPosts
      return {
        props: {
          blogPosts: [],
          blogSubHeader: {
            text: "NEMA POSTOVA",
            link: {
              url: "/blog/svi-postovi",
              text: "Pogledaj sve",
            },
          },
        },
        revalidate: 60 * 30
      };
    }
    
  } catch (error) {
    // If an error occurs log-it and return ERROR=TRUE
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
      revalidate: 60 * 30
    };
  }
};
