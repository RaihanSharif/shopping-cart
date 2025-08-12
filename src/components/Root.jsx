import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";
import { useState } from "react";
import { useProductFetch } from "./useProductFetch";

function Root() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { productList, error, isLoading } = useProductFetch();

  return (
    <>
      <header>
        <Navbar itemCount={12} />
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
