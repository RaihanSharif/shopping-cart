import { Hero } from "../Hero/Hero";
import { FeatureCard } from "../FeatureCard/FeatureCard";

import styles from "./homepage.module.css";

function Homepage() {
  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.features}>
        <FeatureCard
          iconName={"rocket"}
          title={"Fast delivery"}
          description={"Free next day delivery for all orders."}
        />
        <FeatureCard
          iconName={"gem"}
          title={"High Quality"}
          description={
            "Our excellent quality control ensures every product is up to standard."
          }
        />
        <FeatureCard
          iconName={"ticket-percent"}
          title={"Value for money"}
          description={"We offer the best bang for your buck."}
        />
      </section>
    </main>
  );
}

export { Homepage };
