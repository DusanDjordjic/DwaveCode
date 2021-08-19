import styles from "./SearchOverlay.module.scss";
import { AppContext } from "../../../context/context";
import { useState, useContext } from "react";
import { GoSearch } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
const SearchOverlay = () => {
  const { isSearchOverlayActive, hideSearchOverlay } = useContext(AppContext);
  const [search, setSearach] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog/posts/${search.toLocaleLowerCase()}`);
    hideSearchOverlay();
    setSearach("");
  };
  return (
    <div
      className={
        isSearchOverlayActive
          ? `${styles.active} ${styles.container}`
          : styles.container
      }
    >
      <section>
        <div className={styles.wrapper}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearach(e.target.value)}
              placeholder="Search..."
            />
            <button
              disabled={search.length < 3}
              className={search.length < 3 && styles.disabled}
            >
              <GoSearch />
            </button>
          </form>
          <button
            onClick={() => {
              hideSearchOverlay();
              setSearach("");
            }}
            className={styles.closeBtn}
            type="submit"
          >
            <GrFormClose />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchOverlay;
