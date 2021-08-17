import styles from "./BlogSubHeader.module.scss";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
const BlogNewsHeader = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h3>{data.text}</h3>
        {data.link.url != "" ? (
          <Link href={data.link.url}>
            <a>
              {data.link.text} <MdKeyboardArrowRight />
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default BlogNewsHeader;
