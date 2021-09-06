import styles from "./ProfileCard.module.scss";
import Image from "next/image";
const ProfileCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={data.teacherImage} width={100} height={100} />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.name}>{data.teacherName}</p>
        <p className={styles.descriotion}>{data.teacherDescription}</p>
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>{data.teacherQuote}</p>
          <p className={styles.quoteIcon}>"</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
