import ReactMarkdown from "react-markdown";
import styles from "./MarkDownBox.module.scss";
const MarkDownBox = ({ text }) => {
  return (
    <div className={styles.container}>
      <ReactMarkdown children={text}></ReactMarkdown>
    </div>
  );
};

export default MarkDownBox;
