import { Link } from "react-router-dom";

import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Welcome to OdinShop</h1>
      <p>
        Quality products. Affordable prices. From eletronics to fashion. Your
        every day needs all in one place.
      </p>
      <Link className={styles.ctaBtn} to={"shop"}>
        Start shopping
      </Link>
    </div>
  );
}

export { Hero };
