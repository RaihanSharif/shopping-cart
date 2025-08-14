import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from "./root.module.css";

import { useImmer } from "use-immer";
import { useProductFetch } from "../useProductFetch";

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
      <header className={styles.header}>
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
