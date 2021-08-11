import styles from "./Line.module.scss";
const Line = ({ type }) => {
  return (
    <div
      className={`${styles.line} ${
        type === "green"
          ? styles.green
          : type === "black"
          ? styles.black
          : styles.default
      }`}
    ></div>
  );
};

export default Line;
