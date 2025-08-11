import { Link } from "react-router-dom";

//TODO: pass the number of shopping items to the navbar when
// users add or remove items from the shopping cart

function Navbar() {
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
    </nav>
  );
}

export { Navbar };
