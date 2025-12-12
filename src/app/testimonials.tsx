import styles from "@/app/styles/testimonials.module.scss";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.wrapper}>
        <Image src="/review.png" alt="review" fill />
      </div>
      <span>Kelly Williams Rawlings </span>
      <p>
        Rebecca is great. reliable, trust worthy, allowing us to leave our cats
        in the own environment. she is thorough & adores our pets. What more
        could you need. Will use Rebecca again & again.
      </p>
    </div>
  );
}
