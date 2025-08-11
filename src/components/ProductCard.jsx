function ProductCard({
  title,
  description,
  imageUrl,
  price,
  category,
  rating,
  quantity,
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
          <span>{quantity}</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export { ProductCard };
