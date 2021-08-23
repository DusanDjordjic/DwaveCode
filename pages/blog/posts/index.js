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
    return (
      <div>
        <Head>
          <title>{`Blog | ${query}`}</title>
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
            <div className={styles.content}></div>
          </section>
        </main>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>{`Blog | ${query ? query : "Sve"}`}</title>
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
  const { query, tag } = context.query;
  const response = await BlogPostModel.find({});
  let blogPosts = response;

  // Ako nema ni tag ni query vrati sve
  if (!query && !tag) {
    return {
      props: {
        blogPosts: JSON.parse(JSON.stringify(blogPosts)),
        length: blogPosts.length,
        blogSubHeader: {
          text: `Sve objave`,
          link: {
            url: "/blog",
            text: "Nazad",
          },
        },
      },
    };
  }

  // Ako ima tag filtriraj po njemu
  if (tag) {
    blogPosts = response.filter((post) => {
      return post.tags.includes(tag);
    });

    // Vrati podatke na page
    // Ako je posle filtriranja po TAG-u prazan niz
    if (blogPosts.length < 1) {
      return {
        props: {
          blogPosts: [],
          length: 0,
          blogSubHeader: {
            text: `Ništa nije pronađeno za traženo "${tag}"`,
            link: {
              url: "/blog",
              text: "Nazad",
            },
          },
          query: tag,
        },
      };
    }
    // Ako NIJE prazan niz vrati pronadjeno
    return {
      props: {
        blogPosts: JSON.parse(JSON.stringify(blogPosts)),
        length: blogPosts.length,
        blogSubHeader: {
          text: `Rezultat za traženo "${tag}"`,
          link: {
            url: "/blog",
            text: "Nazad",
          },
        },
        query: tag,
      },
    };
  }
  // Ako ima query filtriraj po njemu
  if (query) {
    blogPosts = response.filter((post) => {
      return post.title.includes(query);
    });
    // Vrati podatke na page
    // Ako je posle filtriranja po QUERY-ju prazan niz
    if (blogPosts.length < 1) {
      return {
        props: {
          blogPosts: [],
          length: 0,
          blogSubHeader: {
            text: `Ništa nije pronađeno za traženo "${query}"`,
            link: {
              url: "/blog",
              text: "Nazad",
            },
          },
          query: query,
        },
      };
    }
    // Ako NIJE prazan niz vrati pronadjeno
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
  }
};