import Link from "next/link";
import styles from "./BlogButtons.module.scss";
import { GoTools } from "react-icons/go";
import { HiSparkles } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
const BlogButtons = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/blog/posts?tag=html">
        <button className={styles.button}>
          HTML <GoTools />
        </button>
      </Link>
      <Link href="/blog/posts?tag=css">
        <button className={styles.button}>
          CSS <HiSparkles />
        </button>
      </Link>
      <Link href="/blog/posts?tag=javascript">
        <button className={styles.button}>
          Java Script <FaBrain />
        </button>
      </Link>
    </div>
  );
};

export default BlogButtons;
