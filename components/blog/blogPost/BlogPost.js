import styles from "./BlogPost.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaStopwatch } from "react-icons/fa";
import timeSince from "../../../lib/timeSince";
const BlogPost = ({ data, type }) => {
  const { _id, title, date, description, coverImage, overlay } = data;
  return (
    <div className={`${styles.blogPost} ${styles.big}`}>
      <div className={styles.blogPostImage}>
        <Link href={`/blog/post/${_id}`}>
          <a>
            <div className={styles.imageWrapper}>
              <Image
                src={coverImage}
                layout="fill"
                className={styles.blogImage}
                alt="blog post"
              />
            </div>
            <div className={styles.blogPostImageOverlay}>
              <div className={styles.wrapper}>
                <div className={styles.author}>
                  <Image
                    src={overlay.author.authorImage}
                    width={40}
                    height={40}
                    alt="blog post"
                  />
                  <p>{overlay.author.name}</p>
                </div>
                <div className={styles.readTime}>
                  <FaStopwatch />
                  <p>{overlay.readTime} min</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.blogPostText}>
        <p>{timeSince(date)}</p>
        <h4>{title}</h4>

        <div className={styles.blogPostDesc}>
          {type === "big" && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
