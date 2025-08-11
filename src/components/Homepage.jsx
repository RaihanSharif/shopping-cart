import { Navbar } from "./NavBar";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { FeatureCard } from "./FeatureCard";

function Homepage() {
  return (
    <>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
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
      <Footer />
    </>
  );
}

export { Homepage };
