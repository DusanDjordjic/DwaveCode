import styles from "./BlobCarousel.module.scss";
import Button from "../../layout/smallComponents/button/Button";
import { useState } from "react";
const BlobCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <div className={styles.titleWrapper}>
        <h2>{data.mainTitle}</h2>
        <p>{data.subTitle}</p>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            {data.content.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    activeIndex === index + 1 ? styles.buttonActive : ""
                  }
                  onClick={() => setActiveIndex(index + 1)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className={styles.textWrapper}>
            {data.content.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeIndex === index + 1
                      ? `${styles.text} ${styles.activeText}`
                      : styles.text
                  }
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Button text={item.button.text} link={item.button.link} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlobCarousel;
