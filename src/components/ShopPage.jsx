import { ProductCard } from "./ProductCard";
import { Link, useOutletContext } from "react-router-dom";

function ShopPage() {
  const { productList, error, isLoading } = useOutletContext();

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  console.log("fetching productList");
  console.log({ ...productList[0] });

  return (
    <>
      <main>
        <h1>Our products</h1>
        {productList.map((item) => {
          return (
            <p>
              {item.id} || {item.title} || {item.price} ||
            </p>
          );
        })}
        <ProductCard />
        <Link to="/">Back to home page</Link>
      </main>
    </>
  );
}

export { ShopPage };
