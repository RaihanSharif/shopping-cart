// this component displays the details of a single product in the shopping cart.
// includes number of each product, and total price (number of prods * price for each)
// has buttons to remove the item(s) from cart
// Optionally increase or decrease the number of products in the basket

function CartProductCart({ product, count, totalPrice, onDelete }) {
  return (
    <div>
      <img src={product.image} />
      <p>{product.title}</p>
      <p>£{product.price}</p>
      <span>Quantity: {count}</span>
      <p>Total: £{totalPrice}</p>
      <button onClick={onDelete}>Remove from Cart</button>
    </div>
  );
}

export { CartProductCart };
