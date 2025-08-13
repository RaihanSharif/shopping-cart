import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

import { useImmer } from "use-immer";
import { useProductFetch } from "./useProductFetch";

function numOfItemsInCart(selectedItems) {
  return selectedItems.reduce((accumulator, current) => {
    return accumulator + current.count;
  }, 0);
}

function Root() {
  const [selectedItems, setSelectedItems] = useImmer([]); //[{id: int, count: int}]
  const { productList, error, isLoading } = useProductFetch();

  return (
    <>
      <header>
        <Navbar itemCount={numOfItemsInCart(selectedItems)} />
      </header>
      <Outlet
        context={{
          selectedItems,
          setSelectedItems,
          productList,
          error,
          isLoading,
        }}
      />
      <Footer />
    </>
  );
}

export { Root };
