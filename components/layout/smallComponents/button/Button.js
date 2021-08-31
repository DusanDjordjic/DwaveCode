import Link from "next/link";
import styles from "./Button.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
const Button = ({ text, link, fontSize = 16, isDisabled = false }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(link);
  };
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
      <button
        className={styles.button}
        style={{ fontSize: `${fontSize}px` }}
        onClick={handleClick}
      >
        {text} <MdKeyboardArrowRight />
      </button>
    );
  }
};

export default Button;
