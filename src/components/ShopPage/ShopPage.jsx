import { ProductCard } from "../ProductCard/ProductCard";
import { Link, useOutletContext } from "react-router-dom";

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
        <h1>Our products</h1>
        {productList.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              onAddToCart={(e) => onAddToCart(item.id, e)}
            />
          );
        })}
        <Link to="/">Back to home page</Link>
      </main>
    </>
  );
}

export { ShopPage };
