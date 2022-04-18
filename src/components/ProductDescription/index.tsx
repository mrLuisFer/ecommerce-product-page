import styles from "./productDescription.module.css";
import PriceActions from "./PriceActions";

export default function ProductDescription() {
  return (
    <section className={styles.descriptionContainer}>
      <article>
        <p className={styles.company}>Sneaker Company</p>
        <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
        <p className={styles.description}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll whithstand everything
          the weather can offer.
        </p>
      </article>
      <PriceActions />
    </section>
  );
}
