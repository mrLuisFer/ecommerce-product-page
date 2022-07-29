import styles from "./priceActions.module.css";
import cartIcon from "@/images/icons/icon-cart-btn.svg";
import { useCartContext } from "../../context/CartItemsCtx";
import { useState } from "react";

export default function PriceActions() {
  const { itemsCounter, setAddItem, setItemsCounter } = useCartContext();
  const [items, setItems] = useState<number>(0);

  const handleAddItem = () => {
    if (items > 0) {
      setAddItem(true);
      setItemsCounter((prevItemsCount: number) => prevItemsCount + items);
    }
  };

  const handleIncreaseItem = () => {
    setItems((prevCounter: number) => prevCounter + 1);
  };

  const handleDecreaseItem = () => {
    if (items !== 0 && items > 0)
      setItems((prevCounter: number) => prevCounter - 1);
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

      <div className={styles.actionsDesktopContainer}>
        <div className={styles.priceActionsContainer}>
          <button
            className={styles.commonBtn}
            disabled={!(itemsCounter > 0)}
            onClick={handleDecreaseItem}
          >
            -
          </button>
          <p className={styles.itemNumber}>{items}</p>
          <button className={styles.commonBtn} onClick={handleIncreaseItem}>
            +
          </button>
        </div>

        <button className={styles.priceBtn} onClick={handleAddItem}>
          <img src={cartIcon} alt="Add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
}
