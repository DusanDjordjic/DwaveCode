// STYLES
import styles from "../styles/About.module.scss";
// NEXT COMPONENTS
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// CUSTOM COMPONENTS
import Button from "../components/layout/smallComponents/button/Button";
// FRAMER MOTION
import { motion } from "framer-motion";
// ICONS
import { FaYoutube, FaDiscord, FaUserGraduate } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsChatFill, BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiPaperAirplane } from "react-icons/hi";
// IMAGE SOURCES
import iconOne from "../public/HomePage/paper-plane.png";
import iconTwo from "../public/HomePage/freelance.png";
import iconThree from "../public/HomePage/logo-blue.png";
import iconFour from "../public/HomePage/patreon.png";
import blogillSrc from "../public/Illustrations/reading-il.svg";
import progillSrc from "../public/Illustrations/programming-il.svg";
import frieillSrc from "../public/Illustrations/friends-il.svg";
import smallCardOneSrc from "../public/Cards/Card-Design-02.jpg";
import smallCardTwoSrc from "../public/Cards/Card-Design-06.jpg";
import flSectionCardImageOne from "../public/HomePage/FreelanceSection/fl-books-icon.png";
import flSectionCardImageTwo from "../public/HomePage/FreelanceSection/fl-computer-icon.png";
import flSectionCardImageThree from "../public/HomePage/FreelanceSection/fl-trophy-icon.png";
import flSectionCardWaveImage from "../public/HomePage/FreelanceSection/wave-path.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dwavecode | O nama</title>
        <meta name="description" content="Sajt za učenje veb programiranja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Section__LayoutContainer}>
        <div className={styles.Section__Layout}>
          <section className={styles.introBannerSection}>
            <div className={styles.content}>
              <h3>Dwavecode</h3>
              <h3>Dwavecode</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
