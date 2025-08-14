function ProductCard({ item, onAddToCart }) {
  return (
    <div>
      <img src={item.image} />
      <h3>{item.title}</h3>
      <div>
        <span>{item.category}</span>
        <span>
          {item.rating.rate} ({item.rating.count})
        </span>
      </div>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
      <div>
        <form onSubmit={onAddToCart}>
          <input name="quantity" type="number" defaultValue={1} min={1}></input>
          <button typ="submit">Add to Cart</button>
        </form>
      </div>
    </div>
  );
}

export { ProductCard };
