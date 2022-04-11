import styles from "./productDescription.module.css";

export default function ProductDescription() {
  return (
    <section>
      <article>
        <p className={styles.company}>Sneaker Company</p>
        <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll whithstand everything
          the weather can offer.
        </p>
      </article>
      <div className={styles.priceContainer}>
        <div>
          <h2>$125.00</h2>
          <p>50%</p>
        </div>
        <span>$250.00</span>
      </div>

      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
      <button>Add to cart</button>
    </section>
  );
}
