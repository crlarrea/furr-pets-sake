import styles from "@/app/styles/pricing.module.scss";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import Image from "next/image";
export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <article className={styles.card}>
        <div className={styles.description}>
          <span>1 visit</span>
          <p>£12.50</p>
        </div>
        <div className={styles.wrapper}>
          <Image src="/dog_2.png" fill alt="dog" />
        </div>
      </article>

      <article className={`${styles.card} ${styles.featured}`}>
        <div className={styles.description}>
          <span>2 visits</span>
          <p>£20.00</p>
          <div className={styles.bestValue}>
            <RiMoneyPoundCircleLine /> best value
          </div>
        </div>
        <div className={styles.wrapper}>
          <Image src="/parrot.png" fill alt="dog" />
        </div>
      </article>
      <article className={styles.card}>
        <div className={styles.description}>
          <span>
            +2 visits <br /> get in touch
          </span>
          <p>custom arrangement</p>
        </div>
        <div className={styles.wrapper}>
          <Image src="/cat.png" fill alt="dog" />
        </div>
      </article>
    </section>
  );
}
