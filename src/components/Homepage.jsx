import { Hero } from "./Hero";
import { FeatureCard } from "./FeatureCard";

function Homepage() {
  return (
    <main>
      <Hero />
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
    </main>
  );
}

export { Homepage };
