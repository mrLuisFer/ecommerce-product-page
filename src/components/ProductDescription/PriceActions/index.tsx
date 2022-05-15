import { useState } from "react";
import styles from "./priceActions.module.css";
import cartIcon from "@/images/icons/icon-cart-btn.svg";
import { useCartContext } from "../../context/CartItemsCtx";

export default function PriceActions() {
  const { itemsCounter, addItem, setAddItem, setItemsCounter } =
    useCartContext();

  const handleAddItem = () => {
    if (itemsCounter > 0) {
      setAddItem(true);
    }
  };

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
          disabled={!(itemsCounter > 0)}
          onClick={() =>
            itemsCounter != 0 &&
            itemsCounter > 0 &&
            setItemsCounter((prevCounter: number) => prevCounter - 1)
          }
        >
          -
        </button>
        <p className={styles.itemNumber}>{itemsCounter}</p>
        <button
          className={styles.commonBtn}
          onClick={() =>
            setItemsCounter((prevCounter: number) => prevCounter + 1)
          }
        >
          +
        </button>
      </div>
      <button className={styles.priceBtn} onClick={handleAddItem}>
        <img src={cartIcon} alt="Add to cart" />
        Add to cart
      </button>
    </>
  );
}
