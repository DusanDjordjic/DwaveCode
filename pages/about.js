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
// IMAGE SRORCES
import teamworkSrc from "../public/about/teamwork-image.png";
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
          <section className={styles.secondSection}>
            
              <div className={styles.introText}>
              <h1>O nama</h1>
              <p className={styles.quote}>
                &quot;Ljudi veruju u ono što naprave&quot;
              </p>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  necessitatibus, consequatur dicta deleniti alias blanditiis
                  quaerat cum explicabo id iure iste repellat? Necessitatibus
                  eaque in rem quo optio maxime quibusdam?
                </div>
                <div className={styles.textWrapper}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis, hic magnam? Impedit quas molestiae, accusamus eum
                  laboriosam voluptate ex facere esse neque incidunt tempora
                  omnis adipisci sunt. Veritatis, deleniti ex?
                </div>
                <div className={styles.textWrapper}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora amet ab dicta enim laudantium rerum aliquid, porro
                  distinctio quia incidunt possimus id? Labore autem, possimus
                  dolorem saepe nobis vero? Itaque!
                </div>
                <div className={styles.textWrapper}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores, nesciunt facere aliquid provident a sunt? Porro
                  quibusdam nemo voluptatum fuga odio quidem architecto, ipsum
                  saepe tenetur expedita commodi esse fugit!
                </div>
              </div>
            
          </section>
          <section className={styles.thirdSection}>
            <Image src={teamworkSrc} />
            <div className={styles.textContainer}>
              <div className={styles.textWrapper}>
                <h3>Naša priča</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                necessitatibus, consequatur dicta deleniti alias blanditiis
                quaerat cum explicabo id iure iste repellat? Necessitatibus
                eaque in rem quo optio maxime quibusdam?
              </div>
              <div className={styles.textWrapper}>
                <h3>Šta želimo da postignemo</h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis, hic magnam? Impedit quas molestiae, accusamus eum
                laboriosam voluptate ex facere esse neque incidunt tempora omnis
                adipisci sunt. Veritatis, deleniti ex?
              </div>
              <div className={styles.textWrapper}>
                <h3>Postanite član</h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora amet ab dicta enim laudantium rerum aliquid, porro
                distinctio quia incidunt possimus id? Labore autem, possimus
                dolorem saepe nobis vero? Itaque!
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
