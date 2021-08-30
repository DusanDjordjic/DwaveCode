import styles from "./BlogPostSmall.module.scss";
import Link from "next/link";
import Image from "next/image";
const BlogPostSmall = (data) => {
  console.log(data);
  const { _id, title, coverImage } = data.data;
  return (
    <div className={styles.blogPost}>
      <Link href={`/blog/post/${_id}`}>
        <a>
          <div className={styles.blogPostImage}>
            <div className={styles.imageWrapper}>
              <Image
                src={coverImage}
                layout="fill"
                className={styles.blogImage}
                alt={title}
              />
            </div>
          </div>
          <div className={styles.blogPostText}>
            <h4>{title}</h4>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default BlogPostSmall;
