import { Footer } from "./Footer";
import { Navbar } from "./NavBar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

function ShopPage() {
  return (
    <>
      <main>
        <h1>Our products</h1>
        <ProductCard />
        <Link to="/">Back to home page</Link>
      </main>
    </>
  );
}

export { ShopPage };
