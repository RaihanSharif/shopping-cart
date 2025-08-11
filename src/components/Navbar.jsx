import { Link } from "react-router-dom";

function Navbar({ itemCount }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Link to="cart">
        <span role="cart-items">cart: {itemCount}</span>
      </Link>
    </nav>
  );
}

export { Navbar };
