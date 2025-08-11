import { Cart } from "./components/Cart";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/NavBar";
import { ShopPage } from "./components/ShopPage";
// TODO: Error page

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export { routes };
