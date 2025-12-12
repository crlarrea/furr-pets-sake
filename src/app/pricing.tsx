import styles from "@/app/styles/pricing.module.scss";
export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <article>
        <span>1 visit</span>
        <p>£12.50</p>
      </article>

      <article>
        <span>2 visit</span>
        <p>£20.00</p>
      </article>
      <article>
        <span>+2 visit</span>
        <p>get in touch!</p>
      </article>
    </section>
  );
}
