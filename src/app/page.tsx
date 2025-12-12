import Image from "next/image";
import styles from "./styles/home.module.scss";
import { FaPaw, FaStar, FaTrophy } from "react-icons/fa6";

import Link from "next/link";
import Pricing from "./pricing";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <article className={styles.copy}>
          <span>furr pets sake!</span>
          <p>Stress-free holiday for you and your bundles of fluff!</p>
          <Link href="#">book your days</Link>
          <p className={styles.ratings}>
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
        <article className={styles.reviews}>
          <Testimonials />
          <div className={styles.thumbnail}>
            <span>2025/26</span>

            <p>Pet sitting service of the year.</p>
            <span>
              <FaTrophy />
            </span>
          </div>
          <div>
            <p>trusted by</p>
            <span>+100</span>
            <p>pet lovers</p>
          </div>
        </article>
      </section>
      <Pricing />
    </main>
  );
}
