import styles from "../../styles/Blog.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../../components/layout/smallComponents/button/Button";
import Line from "../../components/layout/smallComponents/line/Line";
import BlogHeader from "../../components/blog/blogHeader/BlogHeader";
import BlogButtons from "../../components/blog/blogButtons/BlogButtons";
import BlogNewsHeader from "../../components/blog/blogHeader/BlogNewsHeader";
const Blog = () => {
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
        <section className={styles.content}>
          <BlogNewsHeader />
        </section>
      </main>
    </div>
  );
};

export default Blog;
