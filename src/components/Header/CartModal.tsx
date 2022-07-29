import { useCartContext } from "../context/CartItemsCtx";
import classes from "./cartModal.module.css";
import iconDelete from "@/images/icons/icon-delete.svg";
import productThumbnail from "@/images/image-product-1-thumbnail.jpg";
import type { ICartItemCtx } from "../context/CartItemsCtx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ProductItem = ({ itemsCounter }: ICartItemCtx) => {
  const { setItemsCounter } = useCartContext();

  const handleDeleteCartItems = () => {
    setItemsCounter(0);
  };

  return (
    <section className={classes.productItemContainer}>
      <div className={classes.productItem}>
        <img
          src={productThumbnail}
          alt="Product Image"
          className={classes.productItemImg}
        />
        <div className={classes.productInfo}>
          <h3 className={classes.productTitle}>Autumn Limited Edition..</h3>
          <p className={classes.productText}>
            $125.00 x {itemsCounter} <span>${itemsCounter * 125}.00</span>
          </p>
        </div>
        <button
          type="button"
          className={classes.productDeleteBtn}
          onClick={handleDeleteCartItems}
        >
          <img src={iconDelete} alt="Clear Cart" />
        </button>
      </div>
      <button type="button" className={classes.checkoutBtn}>
        Checkout
      </button>
    </section>
  );
};

const CartModal = () => {
  const { addItem, itemsCounter, setAddItem, setItemsCounter } =
    useCartContext();
  const [itemContainerRef] = useAutoAnimate<HTMLElement>();

  /*
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCartModal(false);
      }
      return;
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () =>
        document.removeEventListener("click", handleClickOutside, true);
    });
    */

  return (
    <div className={classes.modalContainer}>
      <h2 className={classes.title}>Cart</h2>
      <div className={classes.cartItemsContainer} ref={itemContainerRef}>
        {addItem && itemsCounter > 0 ? (
          <ProductItem
            itemsCounter={itemsCounter}
            addItem={addItem}
            setAddItem={setAddItem}
            setItemsCounter={setItemsCounter}
          />
        ) : (
          <p className={classes.cartEmptyText}>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
