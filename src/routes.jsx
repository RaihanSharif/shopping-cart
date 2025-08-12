import { Cart } from "./components/Cart";
import { Homepage } from "./components/Homepage";
import { ShopPage } from "./components/ShopPage";
import { ErrorPage } from "./components/ErrorPage";
import { Root } from "./components/Root";

const routes = [
  {
    path: "/",
    element: <Root />,
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
