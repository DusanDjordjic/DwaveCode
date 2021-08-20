import styles from "./BlogHeader.module.scss";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { useRouter } from "next/router";
const Header = () => {
  // const [page, setPage] = useState("/");
  const router = useRouter();
  const { displaySearchOverlay } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link href="/blog">
            <a className={router.pathname === "/blog" ? styles.active : ""}>
              Najnovije
            </a>
          </Link>
          <Link href="/blog/posts">
            <a
              className={router.pathname === "/blog/posts" ? styles.active : ""}
            >
              Sve
            </a>
          </Link>
        </div>
        <button className={styles.searchButton} onClick={displaySearchOverlay}>
          <GoSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
