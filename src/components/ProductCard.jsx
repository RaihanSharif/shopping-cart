function ProductCard({ item, onAddToCart }) {
  return (
    <div>
      <img src={item.image} />
      <p>{item.title}</p>
      <div>
        <span>{item.category}</span>
        <span>
          {item.rating.rate} ({item.rating.count})
        </span>
      </div>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
      <div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export { ProductCard };
