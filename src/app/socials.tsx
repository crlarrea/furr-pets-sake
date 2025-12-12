import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import styles from "./styles/socials.module.scss";
export default function Socials() {
  return (
    <ul className={styles.socials}>
      <li>
        <FaFacebookF />
      </li>
      <li>
        <FaInstagram />
      </li>
      <li>
        <FaXTwitter />
      </li>
    </ul>
  );
}
