import Link from "next/link";
import styles from "./Button.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
const Button = ({ text, link, type }) => {
  return (
    <button className={styles.button}>
      <Link href={link}>
        <a>
          {text} <MdKeyboardArrowRight />
        </a>
      </Link>
    </button>
  );
};

export default Button;
