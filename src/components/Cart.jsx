import { useOutletContext } from "react-router-dom";
import { CartProductCart } from "./CartProductCard";

function Cart() {
  const { productList, selectedItems, setSelectedItems } = useOutletContext();
  let cartItemSummary = null;

  // populate the cartItemSummary with {product: {product}, count: int, totalPrice: float(count * product price)}
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

  function getTotal() {
    return cartItemSummary.reduce((accumulator, current) => {
      return accumulator + current.totalPrice;
    }, 0);
  }

  const total = getTotal();

  function onDeleteItemFromCart(itemId) {
    setSelectedItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function onDecrementItem(itemToDecrementId) {
    setSelectedItems((draft) => {
      const item = draft.find((elem) => elem.id === itemToDecrementId);
      if (item.count === 1) {
        return draft.filter((elem) => elem.id !== itemToDecrementId);
      } else {
        item.count = item.count - 1;
      }
    });
  }

  function onIncrement(itemToIncrement) {
    setSelectedItems((draft) => {
      const item = draft.find((cartItem) => cartItem.id === itemToIncrement);
      item.count = item.count + 1;
    });
  }

  return (
    <>
      <main>
        <h1>Your cart</h1>
        <section>
          {cartItemSummary.map((element) => {
            return (
              <CartProductCart
                key={element.product.id}
                product={element.product}
                count={element.count}
                totalPrice={element.totalPrice}
                onDelete={() => onDeleteItemFromCart(element.product.id)}
                onDecrement={() => onDecrementItem(element.product.id)}
                onIncrement={() => onIncrement(element.product.id)}
              />
            );
          })}
        </section>
        <section>
          <h3>Order Summary</h3>
          <p>Subtotal: £{(total - total * 0.2).toFixed(2)}</p>
          <p>Tax: £{(total * 0.2).toFixed(2)}</p>
          <p>Total: £{total.toFixed(2)}</p>
          <button>Proceed to Checkout</button>
        </section>
      </main>
    </>
  );
}

export { Cart };
