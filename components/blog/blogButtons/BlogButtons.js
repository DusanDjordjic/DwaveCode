import Link from "next/link";
import styles from "./BlogButtons.module.scss";
import { GoTools } from "react-icons/go";
import { HiSparkles } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
const BlogButtons = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/blog/posts/html">
        <button className={`${styles.button} ${styles.html}`}>
          HTML <GoTools />
        </button>
      </Link>
      <Link href="/blog/posts/css">
        <button className={`${styles.button} ${styles.css}`}>
          CSS <HiSparkles />
        </button>
      </Link>
      <Link href="/blog/posts/javascript">
        <button className={`${styles.button} ${styles.js}`}>
          Java Script <FaBrain />
        </button>
      </Link>
    </div>
  );
};

export default BlogButtons;
