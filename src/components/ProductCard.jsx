function ProductCard({
  title,
  description,
  imageUrl,
  price,
  category,
  rating,
  onAddItem,
}) {
  return (
    <div>
      <img src={imageUrl} />
      <p>{title}</p>
      <div>
        <span>{category}</span>
        <span>{rating}</span>
      </div>
      <p>{description}</p>
      <p>{price}</p>
      <div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button onClick={onAddItem}>Add to cart</button>
      </div>
    </div>
  );
}

export { ProductCard };
