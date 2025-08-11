import { Footer } from "./Footer";
import { Navbar } from "./NavBar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

function ShopPage() {
  return (
    <>
      <Navbar />
      <section>
        <ProductCard />
        <Link to="/">Back to home page</Link>
      </section>
      <Footer />
    </>
  );
}

export { ShopPage };
