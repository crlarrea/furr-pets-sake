import Booking from "./booking";
import styles from "./styles/nav.module.scss";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>prices</li>
        <li>contact</li>
        <li>about</li>
      </ul>
    </nav>
  );
}
