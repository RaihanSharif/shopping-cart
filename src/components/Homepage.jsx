import { Navbar } from "./NavBar";
import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Navbar />
      <Link to="shop">Shop</Link>
      <Hero />
      <Footer />
    </>
  );
}

export { Homepage };
