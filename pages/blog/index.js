// STYLES
import styles from "../../styles/Blog.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
// CUSTOM COMPONENTS
import BlogHeader from "../../components/blog/blogHeader/BlogHeader";
import BlogButtons from "../../components/blog/blogButtons/BlogButtons";
import BlogNewsHeader from "../../components/blog/blogHeader/BlogSubHeader";
import BlogPost from "../../components/blog/blogPost/BlogPost";
import BlogPostSmall from "../../components/blog/blogPostSmall/BlogPostSmall";
import FeedbackCard from "../../components/OneTimeComponents/feedback/FeedbackCard";
import FeedbackCard2 from "../../components/OneTimeComponents/feedback/FeedbackCard2";
// MODELS
import BlogPostModel from "../../models/BlogPost";
// MIDDLEWARE
import { dbConnect } from "../../middleware/db/dbConnect";
// LIB
import { jsonify } from "../../lib/jsonify";
const Blog = ({ blogPosts, blogSubHeader }) => {
  const editorPickSubHeader = {
    text: "Naša preporuka",
    link: {
      url: "/blog/posts",
      text: "Pogledaj sve",
    },
  };
  const htmlSubHeader = {
    text: "HTML",
    link: {
      url: "/blog/posts?tag=html",
      text: "Pogledaj još",
    },
  };
  const cssSubHeader = {
    text: "CSS",
    link: {
      url: "/blog/posts?tag=css",
      text: "Pogledaj još",
    },
  };
  const jsSubHeader = {
    text: "Javascript",
    link: {
      url: "/blog/posts?tag=javascript",
      text: "Pogledaj još",
    },
  };
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
      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <main className={styles.main}>
            <section className={styles.introSection}>
              <BlogHeader />
              <div className={styles.introSectionText}>
                <h1>Dwave Code Blog</h1>
                <h3>Sve o veb programiranju na jednom mestu</h3>
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
            <section className={styles.editorPicksSection}>
              <div className={styles.editorPickGrid}>
                <div className={styles.editorPickMain}>
                  <BlogNewsHeader data={editorPickSubHeader} />
                  <div className={styles.editorPickPostsWrapper}>
                    {blogPosts.map((post, index) => {
                      if (post.editorPick) {
                        return (
                          <BlogPostSmall
                            key={index}
                            data={post}
                            isVertical={false}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                <div className={styles.editorPickSidebar}>
                  <FeedbackCard2
                    title="Kako vam se čini sajt?"
                    actionFunction={() => {
                      console.log("Blogcina");
                    }}
                  />
                </div>
              </div>
            </section>
            <section className={styles.groupsSection}>
              <h2>Pogledaj najnovije iz...</h2>
              <div className={styles.group}>
                <BlogNewsHeader data={htmlSubHeader} />
                <div className={styles.content}>
                  <div className={styles.contentMain}>
                    {blogPosts
                      .filter((post) => post.tags.includes("html"))
                      .map((post, index) => {
                        if (index < 3) {
                          return (
                            <BlogPost key={index} data={post} type="small" />
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className={styles.group}>
                <BlogNewsHeader data={cssSubHeader} />
                <div className={styles.content}>
                  <div className={styles.contentMain}>
                    {blogPosts
                      .filter((post) => post.tags.includes("css"))
                      .map((post, index) => {
                        if (index < 3) {
                          return (
                            <BlogPost key={index} data={post} type="small" />
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className={styles.group}>
                <BlogNewsHeader data={jsSubHeader} />
                <div className={styles.content}>
                  <div className={styles.contentMain}>
                    {blogPosts
                      .filter((post) => post.tags.includes("javascript"))
                      .map((post, index) => {
                        if (index < 3) {
                          return (
                            <BlogPost key={index} data={post} type="small" />
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
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
    if (blogPosts.length !== 0) {
      // If there is a blogPosts
      // sort them
      blogPosts.sort((a, b) => {
        return b.date - a.date;
      });
      return {
        props: {
          blogPosts: jsonify(blogPosts),
          blogSubHeader: {
            text: "Najnovije",
            link: {
              url: "/blog/posts",
              text: "Pogledaj sve",
            },
          },
        },
        revalidate: 60 * 30,
      };
    } else {
      // If there is no blogPosts

      return {
        props: {
          blogPosts: [],
          blogSubHeader: {
            text: "NEMA POSTOVA",
            link: {
              url: "/blog/posts",
              text: "Pogledaj sve",
            },
          },
        },
        revalidate: 60 * 30,
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
            url: "/blog/posts",
            text: "Pogledaj sve",
          },
        },
      },
      revalidate: 60 * 30,
    };
  }
};
