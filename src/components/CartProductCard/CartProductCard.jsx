// this component displays the details of a single product in the shopping cart.
// includes number of each product, and total price (number of prods * price for each)
// has buttons to remove the item(s) from cart
// Optionally increase or decrease the number of products in the basket

function CartProductCart({
  product,
  count,
  totalPrice,
  onDelete,
  onDecrement,
  onIncrement,
}) {
  return (
    <div>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>£{product.price}</p>
      <span>Quantity: {count}</span>
      <p>Total: £{totalPrice.toFixed(2)}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDelete}>Remove All</button>
    </div>
  );
}

export { CartProductCart };
