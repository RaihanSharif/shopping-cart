import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";
// import { useState } from "react";
import { useImmer } from "use-immer";
import { useProductFetch } from "./useProductFetch";

function Root() {
  const [selectedItems, setSelectedItems] = useImmer([]);
  const { productList, error, isLoading } = useProductFetch();

  function onAddToCart(product, count) {
    setSelectedItems((draft) => {
      for (let i = 0; i < count; i++) {
        draft.push(product);
      }
    });
  }

  return (
    <>
      <header>
        <Navbar itemCount={selectedItems.length} />
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
