import styles from "./CoursesNavigation.module.scss";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const { displaySearchOverlay } = useContext(AppContext);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link href="/kursevi/pocetna">
            <a
              className={
                router.pathname === "/kursevi/pocetna" ? styles.active : ""
              }
            >
              Početna
            </a>
          </Link>
          <Link href="/kursevi/svi">
            <a
              className={
                router.pathname === "/kursevi/svi" ? styles.active : ""
              }
            >
              Svi kursevi
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
