import styles from "./productCard.module.css";

function ProductCard({ item, onAddToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={item.image} />
      </div>
      <div className={styles.prodDetails}>
        <h3>{item.title}</h3>
        <div className={styles.categoryContainer}>
          <span className={styles.category}>{item.category}</span>
          <span className={styles.category}>
            {item.rating.rate} ({item.rating.count})
          </span>
        </div>
        {/* <p>{truncate(item.description, 150)}</p> */}
        <p>Price: £{item.price}</p>
        <div>
          <form className={styles.form} onSubmit={onAddToCart}>
            <input
              className={styles.numInput}
              name="quantity"
              type="number"
              defaultValue={1}
              min={1}
              size="4"
            ></input>
            <button className={styles.submitBtn} type="submit">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { ProductCard };
