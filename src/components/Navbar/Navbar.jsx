import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar({ itemCount }) {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navBtn} to="/">
        Home
      </Link>
      <Link className={styles.navBtn} to="/shop">
        Shop
      </Link>
      <Link className={styles.navBtn} to="cart">
        cart: {itemCount}
      </Link>
    </nav>
  );
}

export { Navbar };
