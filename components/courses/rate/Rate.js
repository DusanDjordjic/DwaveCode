import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useMemo, useState } from "react";
import styles from "./Rate.module.scss";
const Rate = ({ rating, onRating, isStatic }) => {
  const [hoverRating, setHoverRating] = useState(rating);
  let starRating = Array(5)
    .fill(0)
    .map((item, i) => i + 1);
  if (!isStatic) {
    starRating = useMemo(() => {
      return starRating.map((id) => {
        if (hoverRating >= id) {
          return (
            <AiFillStar
              key={id}
              onClick={() => onRating(id)}
              onMouseEnter={() => setHoverRating(id)}
              onMouseLeave={() => setHoverRating(rating)}
            />
          );
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
      });
    }, [hoverRating, rating]);
  } else {
    starRating = useMemo(() => {
      return starRating.map((id) => {
        if (hoverRating >= id) {
          return <AiFillStar key={id} style={{ cursor: "default" }} />;
        } else {
          return <AiOutlineStar key={id} style={{ cursor: "default" }} />;
        }
      });
    }, [rating]);
  }

  return <div className={styles.container}>{starRating}</div>;
};

export default Rate;
