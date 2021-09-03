import styles from "./FeedbackCard2.module.scss";
import { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import emojiHeart from "../../../public/emojis/emoji-hearts.svg";
import emojiHappy from "../../../public/emojis/emoji-happy.svg";
import emojiNeutral from "../../../public/emojis/emoji-neutral.svg";
import emojiSad from "../../../public/emojis/emoji-sad.svg";
import emojiCrying from "../../../public/emojis/emoji-crying.svg";
const FeedbackCard2 = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = async (e) => {
    if (message.length === 0 || email.length === 0 || activeIndex === 0) {
      e.preventDefault();
      setErrorMessage("Popunite formu");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    e.preventDefault();
    setIsSubmited(true);

    // Add message to db
  };
  if (isSubmited) {
    return (
      <div className={styles.cardWrapper}>
        <div className={styles.cardClicked}>
          <p>Hvala na odgovoru</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <header>
          <h4>Kako vam se čini sajt?</h4>
          <ul>
            <li
              className={activeIndex === 1 ? styles.active : null}
              onClick={() => setActiveIndex(1)}
            >
              <Image src={emojiCrying} />
            </li>
            <li
              className={activeIndex === 2 ? styles.active : null}
              onClick={() => setActiveIndex(2)}
            >
              <Image src={emojiSad} />
            </li>
            <li
              className={activeIndex === 3 ? styles.active : null}
              onClick={() => setActiveIndex(3)}
            >
              <Image src={emojiNeutral} />
            </li>
            <li
              className={activeIndex === 4 ? styles.active : null}
              onClick={() => setActiveIndex(4)}
            >
              <Image src={emojiHappy} />
            </li>
            <li
              className={activeIndex === 5 ? styles.active : null}
              onClick={() => setActiveIndex(5)}
            >
              <Image src={emojiHeart} />
            </li>
          </ul>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Poruka</label>
          <textarea
            name="message"
            placeholder="Kako možemo da unapredimo sajt?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">
            Posalji poruku <MdKeyboardArrowRight />
          </button>
        </form>
        <p className={styles.errorMessage}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default FeedbackCard2;
