import styles from "./BlogHeader.module.scss";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.active}>Najnovije</a>
          </Link>
          <Link href="/">
            <a>Novosti</a>
          </Link>
        </div>
        <button className={styles.searchButton}>
          <GoSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
