import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useMemo, useState } from "react";
import styles from "./Rate.module.scss";
const Rate = ({ rating, onRating, isStatic }) => {
  const [hoverRating, setHoverRating] = useState(rating);

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((item, i) => i + 1)
      .map((id) => {
        if (hoverRating >= id) {
          if (isStatic) {
            return <AiFillStar key={id} style={{ cursor: "default" }} />;
          } else {
            return (
              <AiFillStar
                key={id}
                onClick={() => onRating(id)}
                onMouseEnter={() => setHoverRating(id)}
                onMouseLeave={() => setHoverRating(rating)}
              />
            );
          }
        } else {
          if (isStatic) {
            return <AiOutlineStar key={id} style={{ cursor: "default" }} />;
          } else {
            return (
              <AiOutlineStar
                key={id}
                onClick={() => onRating(id)}
                onMouseEnter={() => setHoverRating(id)}
                onMouseLeave={() => setHoverRating(rating)}
              />
            );
          }
        }
      });
  }, [hoverRating, rating]);

  return <div className={styles.container}>{starRating}</div>;
};

export default Rate;
