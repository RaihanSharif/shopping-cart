import { Link, Outlet } from "react-router-dom";
import { ShopPage } from "./ShopPage";
import { Cart } from "./Cart";

function Navbar() {
  return (
    <>
      <header>
        <p>This is the navbar</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export { Navbar };
