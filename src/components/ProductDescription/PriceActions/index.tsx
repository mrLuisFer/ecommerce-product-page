import { useState } from "react";
import styles from "./priceActions.module.css";
import cartIcon from "@/images/icons/icon-cart-btn.svg";

export default function PriceActions() {
  const [cartItem, setCartItem] = useState<number>(0);

  return (
    <>
      <div className={styles.priceContainer}>
        <div className={styles.commonFlex}>
          <h2 className={styles.price}>$125.00</h2>
          <span className={styles.discount}>50%</span>
        </div>
        <span className={styles.oldPrice}>$250.00</span>
      </div>

      <div className={styles.priceActionsContainer}>
        <button
          className={styles.commonBtn}
          disabled={!(cartItem > 0)}
          onClick={() =>
            cartItem != 0 &&
            cartItem > 0 &&
            setCartItem((prevItem) => prevItem - 1)
          }
        >
          -
        </button>
        <p className={styles.itemNumber}>{cartItem}</p>
        <button
          className={styles.commonBtn}
          onClick={() => setCartItem((prevItem) => prevItem + 1)}
        >
          +
        </button>
      </div>
      <button className={styles.priceBtn}>
        <img src={cartIcon} alt="Add to cart" />
        Add to cart
      </button>
    </>
  );
}
