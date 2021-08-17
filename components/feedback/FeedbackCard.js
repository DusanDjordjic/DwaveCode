import styles from "./FeedbackCard.module.scss";
import Button from "../layout/smallComponents/button/Button";
import Link from "next/link";
import Image from "next/image";
import imageSrc from "../../public/newIdea.svg";
const FeedbackCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Dobar odnos sa čitaocima je ključ</h2>
        <p>
          Pošaljite nam poruku o tome šta bi mogli da unapredimo ili koju temu
          da obradimo.
        </p>
        <Button text="Probaj besplatno" link="/" />
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} layout="intrinsic"  alt="new idea"/>
      </div>
    </div>
  );
};

export default FeedbackCard;
