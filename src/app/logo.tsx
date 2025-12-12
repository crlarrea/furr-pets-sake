import { PiDogFill } from "react-icons/pi";
import styles from "./styles/logo.module.scss";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <PiDogFill />
      <h1>furr<span>pets</span>sake!</h1>
    </div>
  );
}
