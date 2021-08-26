import Link from "next/link";
import styles from "./Button.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
const Button = ({ text, link, fontSize = 16, isDisabled = false }) => {
  if (isDisabled) {
    return (
      <button
        className={styles.disabledButton}
        style={{ fontSize: `${fontSize}px` }}
      >
        {text} <MdKeyboardArrowRight />
      </button>
    );
  } else {
    return (
      <button className={styles.button}>
        <Link href={link}>
          <a style={{ fontSize: `${fontSize}px` }}>
            {text} <MdKeyboardArrowRight />
          </a>
        </Link>
      </button>
    );
  }
};

export default Button;
