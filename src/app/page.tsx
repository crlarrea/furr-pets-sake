import Image from "next/image";
import styles from "./styles/home.module.scss";
import { FaPaw, FaStar } from "react-icons/fa6";

import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <article className={styles.copy}>
          <span>furr pets sake!</span>
          <p>Stress-free holiday for you your bundles of fluff!</p>
          <Link href="#">book your days</Link>
          <p className={styles.reviews}>
            <FaStar />
            5-star rating
          </p>
        </article>
        <article className={styles.heroImage}>
          <div className={styles.wrapper}>
            <Image
              src="/dog_1.png"
              fill
              alt="hero image"
              sizes="(max-width:1024px) 250px"
            />
            <span>
              <FaPaw />
              premium
              <br /> pet sitting
            </span>
          </div>
        </article>
        <article className={styles.reviews}> reviews</article>
      </section>
    </main>
  );
}
