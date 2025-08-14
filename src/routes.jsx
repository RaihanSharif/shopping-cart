import { Cart } from "./components/Cart/Cart";
import { Homepage } from "./components/Homepage/Homepage";
import { ShopPage } from "./components/ShopPage/ShopPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Root } from "./components/Root/Root";

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
