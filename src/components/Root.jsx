import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

import { useImmer } from "use-immer";
import { useProductFetch } from "./useProductFetch";

function itemsInCartCount(selectedItems) {
  return selectedItems.reduce((accumulator, current) => {
    return accumulator + current.count;
  }, 0);
}

function Root() {
  const [selectedItems, setSelectedItems] = useImmer([]);
  const { productList, error, isLoading } = useProductFetch();

  function onAddToCart(productId, countToAdd) {
    setSelectedItems((draft) => {
      const temp = draft.find((item) => item.id === productId);
      if (!temp) {
        draft.push({ id: productId, count: countToAdd });
      } else {
        temp.count = temp.count += countToAdd;
      }
    });
  }
  console.log(selectedItems);

  return (
    <>
      <header>
        <Navbar itemCount={itemsInCartCount(selectedItems)} />
      </header>
      <Outlet
        context={{
          selectedItems,
          setSelectedItems,
          productList,
          error,
          isLoading,
          onAddToCart,
        }}
      />
      <Footer />
    </>
  );
}

export { Root };
