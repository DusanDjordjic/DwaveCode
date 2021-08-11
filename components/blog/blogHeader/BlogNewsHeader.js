import styles from "./BlogNewsHeader.module.scss";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
const BlogNewsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h2>Najnovije</h2>
        <Link href="/">
          <a>
            Pogledaj sve <MdKeyboardArrowRight />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default BlogNewsHeader;
