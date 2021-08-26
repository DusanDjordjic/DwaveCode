import Link from "next/link";
import styles from "./RoundButton.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
const RoundButton = ({ link }) => {
  return (
    <button className={styles.button}>
      <Link href={link}>
        <a>
          <MdKeyboardArrowRight />
        </a>
      </Link>
    </button>
  );
};

export default RoundButton;
