import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

function useProductFetch() {
  const [productList, setProductList] = useImmer(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching data...");
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => {
        setProductList(data);
        console.log([...data]);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [setProductList]); // linter throws error since it's not useEffect
  return { productList, error, isLoading };
}

export { useProductFetch };
