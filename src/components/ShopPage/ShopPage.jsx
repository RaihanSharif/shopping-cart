import { ProductCard } from "../ProductCard/ProductCard";
import { Link, useOutletContext } from "react-router-dom";

import styles from "./shopPage.module.css";

function ShopPage() {
  const { productList, error, isLoading, setSelectedItems } =
    useOutletContext();

  //TODO: move function definitions outside of component?
  function onAddToCart(productId, event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const quantityToAdd = parseInt(formData.get("quantity"));
    if (quantityToAdd <= 0) {
      alert("naughty naughty!");
      throw new Error("can't add negative number of items");
    }
    console.log(quantityToAdd);
    setSelectedItems((draft) => {
      const temp = draft.find((item) => item.id === productId);
      if (!temp) {
        draft.push({ id: productId, count: quantityToAdd });
      } else {
        temp.count = temp.count += quantityToAdd;
      }
    });
    event.target.reset();
  }

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <main>
        <h1 className={styles.title}>Our products</h1>
        <div className={styles.cardContainer}>
          {productList.map((item) => {
            return (
              <ProductCard
                key={item.id}
                item={item}
                onAddToCart={(e) => onAddToCart(item.id, e)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export { ShopPage };
