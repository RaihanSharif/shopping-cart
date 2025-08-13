import { useOutletContext } from "react-router-dom";

function Cart() {
  const { productList, selectedItems, setSelectedItems } = useOutletContext();
  let cartItemSummary = null;

  // populate the cartItemSummary with {product: {product}, count: int, price: float(count * product price)}
  function generateCartSummary() {
    return selectedItems.map((cartItem) => {
      const itemObj = productList.find((item) => item.id === cartItem.id);
      return {
        item: itemObj,
        count: cartItem.count,
        price: cartItem.count * itemObj.price,
      };
    });
  }
  cartItemSummary = generateCartSummary();
  return (
    <>
      <main>
        {cartItemSummary.map((element) => {
          return (
            <div key={element.item.id}>
              <p>
                item ID: {element.item.id} -||- name: {element.item.title} -||-
                count: {element.count} -||- price: £{element.price}
              </p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export { Cart };
