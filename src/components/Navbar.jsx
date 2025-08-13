import { Link } from "react-router-dom";
import "./navbar.module.css";

function Navbar({ itemCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="cart">cart: {itemCount}</Link>
    </nav>
  );
}

export { Navbar };
