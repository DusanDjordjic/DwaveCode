import BlogPostModel from "../../../models/BlogPost";

import styles from "../../../styles/SearchPosts.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import BlogHeader from "../../../components/blog/blogHeader/BlogHeader";
import BlogNewsHeader from "../../../components/blog/blogHeader/BlogSubHeader";
import BlogPost from "../../../components/blog/blogPost/BlogPost";

const searchPosts = ({ blogPosts, length, blogSubHeader, query }) => {
  if (length === 0) {
    return <div>{blogPosts}</div>;
  }
  return (
    <div>
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

export default searchPosts;

export const getServerSideProps = async (context) => {
  const { query } = context.query;
  const response = await BlogPostModel.find({});

  const blogPosts = response.filter((post) => {
    return post.title.includes(query);
  });
  if (blogPosts.length < 1) {
    return {
      props: {
        blogPosts: `No posts found when searched for "${query}"`,
        length: 0,
        blogSubHeader: {
          text: `Rezultat za traženo ${query}`,
          link: {
            url: "/blog",
            text: "Nazad",
          },
        },
        query: query,
      },
    };
  }
  return {
    props: {
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
      length: blogPosts.length,
      blogSubHeader: {
        text: `Rezultat za traženo "${query}"`,
        link: {
          url: "/blog",
          text: "Nazad",
        },
      },
      query: query,
    },
  };
};
