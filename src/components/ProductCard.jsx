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
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button onClick={() => onAddToCart(item.id, 1)}>Add to cart</button>
      </div>
    </div>
  );
}

export { ProductCard };
