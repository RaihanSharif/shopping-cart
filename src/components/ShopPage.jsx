import { ProductCard } from "./ProductCard";
import { Link, useOutletContext } from "react-router-dom";

function ShopPage() {
  const { productList, error, isLoading, onAddToCart } = useOutletContext();

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <main>
        <h1>Our products</h1>
        {productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              onAddToCart={() => onAddToCart(item, 1)}
            />
          );
        })}
        <Link to="/">Back to home page</Link>
      </main>
    </>
  );
}

export { ShopPage };
