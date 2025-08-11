import { Cart } from "./components/Cart";
import { Homepage } from "./components/Homepage";
import { ShopPage } from "./components/ShopPage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    // TODO: Error page
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export { routes };
