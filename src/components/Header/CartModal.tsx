import { useCartContext } from "../context/CartItemsCtx";
import classes from "./cartModal.module.css";
import iconDelete from "@/images/icons/icon-delete.svg";
import productThumbnail from "@/images/image-product-1-thumbnail.jpg";
import type { ICartItemCtx } from "../context/CartItemsCtx";

const Dialog = ({ itemsCounter }: ICartItemCtx) => {
  return (
    <div>
      <section>
        <img src={productThumbnail} alt="Product Image" />
        <div>
          <h3>Autumn Limited Edition..</h3>
          <p>
            $125.00 x {itemsCounter} <span>${itemsCounter * 125}.00</span>
          </p>
          <button type="button">
            <img src={iconDelete} alt="Clear Cart" />
          </button>
        </div>
      </section>
      <button type="button">Checkout</button>
    </div>
  );
};

export default function CartModal() {
  const { addItem, itemsCounter, setAddItem, setItemsCounter } =
    useCartContext();

  return (
    <div className={classes.modalContainer}>
      <h2 className={classes.title}>Cart</h2>
      <div className={classes.cartItemsContainer}>
        {addItem ? (
          <Dialog
            itemsCounter={itemsCounter}
            addItem={addItem}
            setAddItem={setAddItem}
            setItemsCounter={setItemsCounter}
          />
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
