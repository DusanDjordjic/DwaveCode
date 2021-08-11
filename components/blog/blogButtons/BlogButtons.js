import Link from "next/link";
import styles from "./BlogButtons.module.scss";
import { GoTools } from "react-icons/go";
import { HiSparkles } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
const BlogButtons = () => {
  return (
    <div className={styles.wrapper}>
      <button className={`${styles.button} ${styles.html}`}>
        HTML <GoTools />
      </button>
      <button className={`${styles.button} ${styles.css}`}>
        CSS <HiSparkles />
      </button>
      <button className={`${styles.button} ${styles.js}`}>
        Java Script <FaBrain />
      </button>
    </div>
  );
};

export default BlogButtons;
