import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "../../../public/logo.svg";
const Footer = () => {
  const disableLink = (e) => {
    e.preventDefault();
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <div>
            <ul>
              <li>Postani Član</li>
              <li>
                <Link href="/">
                  <a
                    className={styles.inactive}
                    onClick={(e) => disableLink(e)}
                  >
                    Saznaj Kako
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={styles.inactive}
                    onClick={(e) => disableLink(e)}
                  >
                    Hoćeš posao
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Linkovi</li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={styles.inactive}
                    onClick={(e) => disableLink(e)}
                  >
                    GitHub
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a
                    className={styles.inactive}
                    onClick={(e) => disableLink(e)}
                  >
                    Discord
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Blog</li>
              <li>
                <Link href="/">Najnovije</Link>
              </li>
              <li>
                <Link href="/">Sve</Link>
              </li>
              <li>
                <Link href="/">Html</Link>
              </li>
              <li>
                <Link href="/">Css</Link>
              </li>
              <li>
                <Link href="/">JavaScript</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Podrška</li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Postavi pitanje</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRightSection}>
          <Image src={logoSrc} width="50" height="50" />
          <p>CopyRight &copy; 2021 Dwavecode</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
