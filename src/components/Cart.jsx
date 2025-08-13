import { useOutletContext } from "react-router-dom";
import { CartProductCart } from "./CartProductCard";

function Cart() {
  const { productList, selectedItems, setSelectedItems } = useOutletContext();
  let cartItemSummary = null;

  // populate the cartItemSummary with {product: {product}, count: int, price: float(count * product price)}
  function generateCartSummary() {
    return selectedItems.map((cartItem) => {
      const itemObj = productList.find((item) => item.id === cartItem.id);
      return {
        product: itemObj,
        count: cartItem.count,
        totalPrice: cartItem.count * itemObj.price,
      };
    });
  }
  cartItemSummary = generateCartSummary();

  function onDeleteFromCart(itemId) {
    setSelectedItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <main>
        {cartItemSummary.map((element) => {
          return (
            <CartProductCart
              key={element.product.id}
              product={element.product}
              count={element.count}
              totalPrice={element.totalPrice}
              onDelete={() => onDeleteFromCart(element.product.id)}
            />
          );
        })}
      </main>
    </>
  );
}

export { Cart };
