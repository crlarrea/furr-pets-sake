import { BsCalendarCheckFill } from "react-icons/bs";
import styles from "./styles/booking.module.scss";
import Link from "next/link";
export default function Booking() {
  return (
    <Link href="#" className={styles.booking}>
      <BsCalendarCheckFill />
    </Link>
  );
}
