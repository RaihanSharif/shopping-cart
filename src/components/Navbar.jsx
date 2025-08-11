import { Link } from "react-router-dom";
import { ShopPage } from "./ShopPage";
import { Cart } from "./Cart";

function Navbar() {
  return (
    <header>
      <p>This is the navbar</p>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
}

export { Navbar };
