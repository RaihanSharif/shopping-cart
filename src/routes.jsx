import { Cart } from "./components/Cart";
import { Homepage } from "./components/Homepage";
import { Navbar } from "./components/NavBar";
import { ShopPage } from "./components/ShopPage";
import { ErrorPage } from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
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
