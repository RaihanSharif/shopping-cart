import { ProductCard } from "./ProductCard";
import { Link, useOutletContext } from "react-router-dom";

function ShopPage() {
  const { productList, error, isLoading, setSelectedItems } =
    useOutletContext();

  function onAddToCart(productId, countToAdd) {
    console.log("calling onAddToCart");
    setSelectedItems((draft) => {
      const temp = draft.find((item) => item.id === productId);
      if (!temp) {
        draft.push({ id: productId, count: countToAdd });
      } else {
        temp.count = temp.count += countToAdd;
      }
    });
  }

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <main>
        <h1>Our products</h1>
        {productList.map((item) => {
          return (
            <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
          );
        })}
        <Link to="/">Back to home page</Link>
      </main>
    </>
  );
}

export { ShopPage };
