import styles from "./styles/footer.module.scss";
import Socials from "./socials";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <article>
        <Logo />
        <ul className={styles.contact}>
          <li>Rattray · Coupar Angus · Alyth · Blairgowrie</li>
          <li>0772 533 5068</li>
          <li>rebecca@furrpetssake.co.uk</li>
        </ul>
      </article>

      <Socials />
    </footer>
  );
}
